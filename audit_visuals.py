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
            
            # Audit slide: SVG text nodes, bullet count, and vertical overflow
            result = page.evaluate("""() => {
                const activeSlide = document.querySelector('.slide.is-active');
                if (!activeSlide) return { texts: [], overflows: [], bulletCount: 0, slideOverflow: false };
                
                // Check bullet count (max 3 points rule)
                const cleanList = activeSlide.querySelectorAll('.clean-list > li');
                const mainBullets = activeSlide.querySelectorAll('.main-bullets > li');
                const bulletCount = cleanList.length || mainBullets.length || 0;
                
                // Check vertical overflow of slide content
                const slideIn = activeSlide.querySelector('.slide__in');
                const deck = document.querySelector('.deck');
                let slideOverflow = false;
                if (slideIn && deck) {
                    const deckRect = deck.getBoundingClientRect();
                    const inRect = slideIn.getBoundingClientRect();
                    if (inRect.bottom > deckRect.bottom + 5 || inRect.top < deckRect.top - 5) {
                        slideOverflow = true;
                    }
                }
                
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
                        let b = { x: 0, y: 0, width: 0, height: 0 };
                        try {
                            const raw = t.getBBox();
                            b = { x: raw.x, y: raw.y, width: raw.width, height: raw.height };
                        } catch (e) {}
                        
                        const exceedsRight = (b.x + b.width) > (svgW + 6);
                        const exceedsLeft = b.x < -3;
                        const exceedsBottom = (b.y + b.height) > (svgH + 6);
                        const exceedsTop = b.y < -3;
                        const isClipped = exceedsRight || exceedsLeft || exceedsBottom || exceedsTop;
                        const isSmall = fs < 15.0;

                        // Verification: fs >= 15px (1.5x scaling)
                        const item = {
                            svgIdx: sIdx,
                            text: str,
                            fontSize: fs,
                            x: b.x,
                            y: b.y,
                            width: b.width,
                            height: b.height,
                            isSmall: isSmall,
                            isClipped: isClipped,
                            exceedsRight: exceedsRight,
                            exceedsLeft: exceedsLeft,
                            exceedsBottom: exceedsBottom,
                            exceedsTop: exceedsTop
                        };
                        
                        textNodes.push(item);
                        
                        if (isSmall || isClipped) {
                            overflows.push(item);
                        }
                    });
                });
                
                return { 
                    texts: textNodes, 
                    overflows: overflows, 
                    bulletCount: bulletCount, 
                    slideOverflow: slideOverflow 
                };
            }""")
            
            small_count = sum(1 for t in result['texts'] if t['isSmall'])
            clip_count = sum(1 for t in result['texts'] if t['isClipped'])
            bullet_count = result['bulletCount']
            slide_overflow = result['slideOverflow']
            
            status_str = f"Slide {slide_num:2d} ({lang}): Bullets: {bullet_count:1d} (max 3), SVG texts: {len(result['texts']):2d}, Small (<15px): {small_count}, SVG Clip: {clip_count}"
            if slide_overflow:
                status_str += " [SLIDE OVERFLOW DETECTED]"
            print(status_str)
            
            if small_count > 0 or clip_count > 0 or bullet_count > 3 or slide_overflow:
                issues.append({
                    'lang': lang,
                    'slide': slide_num,
                    'bulletCount': bullet_count,
                    'slideOverflow': slide_overflow,
                    'overflows': result['overflows']
                })
                
    browser.close()

print("\n=================== AUDIT SUMMARY ===================")
if not issues:
    print("ALL 16 SLIDES PASSED! Maximum 3 points per slide, all SVG text >= 15px (1.5x), zero overflows, and zero clippings.")
else:
    print(f"Found issues on {len(issues)} slide check(s):")
    for issue in issues:
        print(f"\n--- Slide {issue['slide']} ({issue['lang']}) ---")
        if issue['bulletCount'] > 3:
            print(f"  • Bullet count exceeded: {issue['bulletCount']} points (max 3 allowed)")
        if issue['slideOverflow']:
            print("  • Slide content overflows viewport height!")
        for ov in issue['overflows']:
            reasons = []
            if ov['isSmall']: reasons.append(f"Size < 15px (actual: {ov['fontSize']}px)")
            if ov['exceedsRight']: reasons.append(f"Exceeds right (x+w={ov['x']+ov['width']:.1f})")
            if ov['exceedsLeft']: reasons.append(f"Exceeds left (x={ov['x']:.1f})")
            if ov['exceedsBottom']: reasons.append(f"Exceeds bottom (y+h={ov['y']+ov['height']:.1f})")
            if ov['exceedsTop']: reasons.append(f"Exceeds top (y={ov['y']:.1f})")
            print(f"  • SVG text '{ov['text']}' [{', '.join(reasons)}]")
