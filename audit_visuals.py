import json
import os
import sys
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding='utf-8')

os.makedirs('screenshots', exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto('file:///C:/Users/kenhu/agent-commerce-security-site/index.html')
    page.wait_for_selector('.slide')
    
    issues = []

    for lang in ['en', 'zh']:
        print(f"\n=================== TESTING LANG: {lang.upper()} ===================")
        # Switch language
        page.evaluate(f"window.AGENT_SEC_I18N && window.AGENT_SEC_I18N.setLang('{lang}')")
        page.wait_for_timeout(300)
        
        for slide_num in range(1, 17):
            page.evaluate(f"window.location.hash = '#{slide_num}'")
            page.wait_for_timeout(350)
            
            # Take screenshot
            screenshot_path = f"screenshots/slide_{slide_num}_{lang}.png"
            page.screenshot(path=screenshot_path)
            
            # Audit SVG text nodes
            result = page.evaluate("""() => {
                const activeSlide = document.querySelector('.slide.is-active');
                if (!activeSlide) return { texts: [], overflows: [] };
                
                const svgs = activeSlide.querySelectorAll('svg');
                const textNodes = [];
                const overflows = [];
                
                svgs.forEach((svg, sIdx) => {
                    const viewBox = svg.viewBox.baseVal;
                    const svgW = viewBox ? viewBox.width : svg.clientWidth;
                    const svgH = viewBox ? viewBox.height : svg.clientHeight;
                    
                    const texts = svg.querySelectorAll('text');
                    texts.forEach(t => {
                        const style = window.getComputedStyle(t);
                        const fs = parseFloat(style.fontSize);
                        const str = t.textContent.trim();
                        let bbox = { x: 0, y: 0, width: 0, height: 0 };
                        try {
                            bbox = t.getBBox();
                        } catch (e) {}
                        
                        const item = {
                            svgIdx: sIdx,
                            text: str,
                            fontSize: fs,
                            x: bbox.x,
                            y: bbox.y,
                            width: bbox.width,
                            height: bbox.height,
                            isSmall: fs < 10.0,
                            exceedsRight: (bbox.x + bbox.width) > (svgW + 4),
                            exceedsLeft: bbox.x < -2,
                            exceedsBottom: (bbox.y + bbox.height) > (svgH + 4),
                            exceedsTop: bbox.y < -2
                        };
                        
                        textNodes.push(item);
                        
                        if (item.isSmall || item.exceedsRight || item.exceedsLeft || item.exceedsBottom || item.exceedsTop) {
                            overflows.push(item);
                        }
                    });
                });
                
                return { texts: textNodes, overflows: overflows };
            }""")
            
            small_count = sum(1 for t in result['texts'] if t['isSmall'])
            overflow_count = len(result['overflows'])
            
            print(f"Slide {slide_num:2d} ({lang}): {len(result['texts']):2d} SVG texts checked. Small (<10px): {small_count}, Overflow/Clip: {overflow_count}")
            
            if overflow_count > 0:
                issues.append({
                    'lang': lang,
                    'slide': slide_num,
                    'overflows': result['overflows']
                })
                
    browser.close()

print("\n=================== AUDIT SUMMARY ===================")
if not issues:
    print("ALL 15 SLIDES PASSED! Zero text overflows, zero clippings, and all SVG text sizes >= 10px.")
else:
    print(f"Found issues on {len(issues)} slide check(s):")
    for issue in issues:
        print(f"\n--- Slide {issue['slide']} ({issue['lang']}) ---")
        for ov in issue['overflows']:
            reasons = []
            if ov['isSmall']: reasons.append(f"Size < 10 (actual: {ov['fontSize']}px)")
            if ov['exceedsRight']: reasons.append(f"Exceeds right (x+w={ov['x']+ov['width']:.1f})")
            if ov['exceedsLeft']: reasons.append(f"Exceeds left (x={ov['x']:.1f})")
            if ov['exceedsBottom']: reasons.append(f"Exceeds bottom (y+h={ov['y']+ov['height']:.1f})")
            if ov['exceedsTop']: reasons.append(f"Exceeds top (y={ov['y']:.1f})")
            print(f"  • '{ov['text']}' [{', '.join(reasons)}]")
