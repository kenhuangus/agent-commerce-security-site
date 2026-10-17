import os
import sys
from playwright.sync_api import sync_playwright
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')

svg_path = os.path.abspath('assets/favicon.svg')
touch_path = os.path.abspath('assets/apple-touch-icon.png')
fav32_path = os.path.abspath('assets/favicon-32.png')
ico_path = os.path.abspath('assets/favicon.ico')

temp_html = os.path.abspath('temp_fav.html')
with open(temp_html, 'w', encoding='utf-8') as f:
    f.write(f'''<!DOCTYPE html>
<html>
<head><style>body {{ margin:0; padding:0; background:transparent; overflow:hidden; }}</style></head>
<body>
  <img src="file:///{svg_path.replace(os.sep, '/')}" width="512" height="512" style="display:block;" />
</body>
</html>''')

temp_png = os.path.abspath('temp_512.png')
with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 512, 'height': 512}, device_scale_factor=1)
    page.goto(f'file:///{temp_html.replace(os.sep, "/")}')
    page.screenshot(path=temp_png, omit_background=True)
    browser.close()

if os.path.exists(temp_html):
    os.remove(temp_html)

img = Image.open(temp_png)

# 180x180 Apple Touch Icon
img_180 = img.resize((180, 180), Image.Resampling.LANCZOS)
img_180.save(touch_path, 'PNG')
print(f'Saved: {touch_path}')

# 32x32 PNG
img_32 = img.resize((32, 32), Image.Resampling.LANCZOS)
img_32.save(fav32_path, 'PNG')
print(f'Saved: {fav32_path}')

# Multi-resolution ICO: 16, 32, 48
img.save(ico_path, format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
print(f'Saved: {ico_path}')

if os.path.exists(temp_png):
    os.remove(temp_png)

print('SUCCESS: All favicon formats generated!')
