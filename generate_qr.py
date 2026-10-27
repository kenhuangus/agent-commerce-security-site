import qrcode
import qrcode.image.svg
from PIL import Image, ImageDraw
import re

url = 'https://kenhuangus.substack.com/'

# 1. Generate PNG with center emblem
qr = qrcode.QRCode(
    version=3,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=12,
    border=3,
)
qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(fill_color='#141413', back_color='#FFFFFF').convert('RGBA')
w, h = img.size

badge_size = int(w * 0.22)
bx0 = (w - badge_size) // 2
by0 = (h - badge_size) // 2
bx1 = bx0 + badge_size
by1 = by0 + badge_size

draw = ImageDraw.Draw(img)
pad = 6
draw.rounded_rectangle([bx0 - pad, by0 - pad, bx1 + pad, by1 + pad], radius=10, fill='#FFFFFF', outline='#E6E8EC', width=2)
draw.rounded_rectangle([bx0, by0, bx1, by1], radius=8, fill='#FF6719')

sw = badge_size
sh = badge_size
draw.rectangle([bx0 + sw*0.22, by0 + sh*0.22, bx1 - sw*0.22, by0 + sh*0.34], fill='#FFFFFF')
draw.rectangle([bx0 + sw*0.22, by0 + sh*0.42, bx1 - sw*0.22, by0 + sh*0.54], fill='#FFFFFF')
points = [
    (bx0 + sw*0.22, by0 + sh*0.62),
    (bx1 - sw*0.22, by0 + sh*0.62),
    (bx0 + sw*0.50, by0 + sh*0.78)
]
draw.polygon(points, fill='#FFFFFF')
img.save('assets/images/qr-substack.png')

# 2. Generate SVG
factory = qrcode.image.svg.SvgPathImage
svg_img = qrcode.make(url, image_factory=factory, box_size=12, border=3, error_correction=qrcode.constants.ERROR_CORRECT_H)
svg_bytes = svg_img.to_string()
svg_str = svg_bytes.decode('utf-8')

m = re.search(r'viewBox="0 0 ([0-9.]+) ([0-9.]+)"', svg_str)
vw = float(m.group(1))
vh = float(m.group(2))
cx = vw / 2.0
cy = vh / 2.0
bw = vw * 0.23
bh = vh * 0.23
bx = cx - bw / 2.0
by = cy - bh / 2.0

inner_w = bw * 0.88
inner_h = bh * 0.88
ix = cx - inner_w / 2.0
iy = cy - inner_h / 2.0

bar_w = inner_w * 0.65
bar_h = inner_h * 0.13
bar_x = cx - bar_w / 2.0
bar1_y = iy + inner_h * 0.20
bar2_y = iy + inner_h * 0.40
p1 = (bar_x, iy + inner_h * 0.60)
p2 = (bar_x + bar_w, iy + inner_h * 0.60)
p3 = (cx, iy + inner_h * 0.80)

emblem = f'''
<!-- Substack Center Emblem -->
<rect x="{bx:.2f}" y="{by:.2f}" width="{bw:.2f}" height="{bh:.2f}" rx="2.0" fill="#FFFFFF" stroke="#E6E8EC" stroke-width="0.3"/>
<rect x="{ix:.2f}" y="{iy:.2f}" width="{inner_w:.2f}" height="{inner_h:.2f}" rx="1.6" fill="#FF6719"/>
<rect x="{bar_x:.2f}" y="{bar1_y:.2f}" width="{bar_w:.2f}" height="{bar_h:.2f}" fill="#FFFFFF"/>
<rect x="{bar_x:.2f}" y="{bar2_y:.2f}" width="{bar_w:.2f}" height="{bar_h:.2f}" fill="#FFFFFF"/>
<polygon points="{p1[0]:.2f},{p1[1]:.2f} {p2[0]:.2f},{p2[1]:.2f} {p3[0]:.2f},{p3[1]:.2f}" fill="#FFFFFF"/>
</svg>'''

idx1 = svg_str.find('>') + 1
svg_str = svg_str[:idx1] + '\n<rect width="100%" height="100%" fill="#FFFFFF"/>\n' + svg_str[idx1:]
idx2 = svg_str.rfind('</svg>')
svg_final = svg_str[:idx2] + emblem

with open('assets/images/qr-substack.svg', 'w', encoding='utf-8') as f:
    f.write(svg_final)

print(f"Generated perfect PNG and SVG QR codes (viewBox: {vw}x{vh})!")
