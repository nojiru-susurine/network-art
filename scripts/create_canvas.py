#!/usr/bin/env python3
"""
Mimoza - 任天堂風ポップなキャラクターデザイン
ポケモン・スプラトゥーンのような親しみやすさ
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math
import os
import random

# Canvas dimensions
WIDTH = 1800
HEIGHT = 2400

# モダン＆フレンドリーなカラーパレット
COLORS = {
    'background': (250, 247, 255),      # ほんのり紫がかった白
    'coral': (255, 107, 107),           # コーラルピンク
    'peach': (255, 177, 140),           # ピーチ
    'mint': (72, 219, 180),             # フレッシュミント
    'sky': (100, 181, 246),             # スカイブルー
    'lavender': (179, 136, 255),        # ラベンダー
    'yellow': (255, 213, 79),           # サニーイエロー
    'white': (255, 255, 255),
    'dark': (55, 55, 75),               # ソフトダーク
    'gray': (180, 180, 195),            # ライトグレー
}

def draw_modern_blob(draw, center, size, color, squish=1.0):
    """モダンでソフトな形（少し縦長や横長にできる）"""
    x, y = center
    # シンプルで洗練された楕円
    draw.ellipse([x - size, y - size * squish, x + size, y + size * squish], fill=color)

def draw_friend(draw, center, size, body_color, face_type='smile'):
    """モダンでかわいいキャラクター"""
    x, y = center

    # 体（きれいな円）
    draw.ellipse([x - size, y - size, x + size, y + size], fill=body_color)

    # 目 - シンプルで大きめ
    eye_size = size * 0.12
    eye_y = y - size * 0.1
    eye_spacing = size * 0.3

    if face_type == 'smile':
        # にっこり閉じ目
        for sign in [-1, 1]:
            ex = x + sign * eye_spacing
            draw.arc([ex - eye_size*1.2, eye_y - eye_size, ex + eye_size*1.2, eye_y + eye_size],
                    start=200, end=340, fill=COLORS['dark'], width=max(3, int(size*0.06)))
    elif face_type == 'wink':
        # ウインク
        draw.arc([x - eye_spacing - eye_size*1.2, eye_y - eye_size,
                  x - eye_spacing + eye_size*1.2, eye_y + eye_size],
                start=200, end=340, fill=COLORS['dark'], width=max(3, int(size*0.06)))
        draw.ellipse([x + eye_spacing - eye_size, eye_y - eye_size,
                     x + eye_spacing + eye_size, eye_y + eye_size], fill=COLORS['dark'])
        # ハイライト
        hl = eye_size * 0.5
        draw.ellipse([x + eye_spacing - eye_size*0.5, eye_y - eye_size*0.5,
                     x + eye_spacing - eye_size*0.5 + hl, eye_y - eye_size*0.5 + hl], fill=COLORS['white'])
    else:
        # 開いた目
        for sign in [-1, 1]:
            ex = x + sign * eye_spacing
            draw.ellipse([ex - eye_size, eye_y - eye_size, ex + eye_size, eye_y + eye_size], fill=COLORS['dark'])
            hl = eye_size * 0.5
            draw.ellipse([ex - eye_size*0.4, eye_y - eye_size*0.4,
                         ex - eye_size*0.4 + hl, eye_y - eye_size*0.4 + hl], fill=COLORS['white'])

    # 口 - かわいい小さめ
    mouth_y = y + size * 0.25
    mouth_w = size * 0.2
    draw.arc([x - mouth_w, mouth_y - mouth_w*0.6, x + mouth_w, mouth_y + mouth_w*0.6],
             start=10, end=170, fill=COLORS['dark'], width=max(2, int(size*0.04)))

def draw_splat(draw, center, size, color):
    """スプラトゥーン風のインクスプラッシュ"""
    x, y = center
    random.seed(int(x * y) % 10000)

    # メインの丸
    draw.ellipse([x - size, y - size*0.8, x + size, y + size*0.8], fill=color)

    # 飛び散り
    for _ in range(6):
        angle = random.random() * 2 * math.pi
        dist = size * (0.8 + random.random() * 0.6)
        splat_x = x + dist * math.cos(angle)
        splat_y = y + dist * math.sin(angle)
        splat_r = size * (0.15 + random.random() * 0.2)
        draw.ellipse([splat_x - splat_r, splat_y - splat_r,
                     splat_x + splat_r, splat_y + splat_r], fill=color)

def draw_star(draw, center, size, color):
    """かわいい星"""
    x, y = center
    points = []
    for i in range(10):
        angle = i * math.pi / 5 - math.pi / 2
        r = size if i % 2 == 0 else size * 0.5
        points.append((x + r * math.cos(angle), y + r * math.sin(angle)))
    draw.polygon(points, fill=color)

def draw_heart(draw, center, size, color):
    """ぷっくりハート"""
    x, y = center
    points = []
    for i in range(100):
        t = i / 100 * 2 * math.pi
        hx = 16 * (math.sin(t) ** 3)
        hy = -(13 * math.cos(t) - 5 * math.cos(2*t) - 2 * math.cos(3*t) - math.cos(4*t))
        points.append((x + hx * size / 16, y + hy * size / 16))
    draw.polygon(points, fill=color)

def main():
    random.seed(42)
    img = Image.new('RGBA', (WIDTH, HEIGHT), COLORS['background'])
    draw = ImageDraw.Draw(img, 'RGBA')

    # フォント
    font_dir = "/Users/sakaguchikeisuke/.claude/plugins/marketplaces/anthropic-agent-skills/canvas-design/canvas-fonts"
    try:
        font_label = ImageFont.truetype(f"{font_dir}/Outfit-Bold.ttf", 28)
        font_title = ImageFont.truetype(f"{font_dir}/Outfit-Bold.ttf", 90)
        font_sub = ImageFont.truetype(f"{font_dir}/Outfit-Regular.ttf", 32)
    except:
        font_label = ImageFont.load_default()
        font_title = ImageFont.load_default()
        font_sub = ImageFont.load_default()

    # === 背景のソフトなグラデーション風ブロブ ===
    bg_blobs = [
        ((150, 200), 180, (*COLORS['peach'], 40)),
        ((1650, 150), 150, (*COLORS['lavender'], 35)),
        ((200, 1600), 200, (*COLORS['mint'], 30)),
        ((1600, 2000), 170, (*COLORS['sky'], 35)),
        ((900, 300), 120, (*COLORS['yellow'], 25)),
    ]
    for pos, size, color in bg_blobs:
        draw_modern_blob(draw, pos, size, color, squish=0.9)

    # === タイトル（上部に大きく） ===
    title = "mimoza"
    bbox = draw.textbbox((0, 0), title, font=font_title)
    text_width = bbox[2] - bbox[0]
    title_x = (WIDTH - text_width) // 2
    title_y = 180

    draw.text((title_x, title_y), title, fill=COLORS['coral'], font=font_title)

    # === メインビジュアル：フレンドたちがワイワイ集まる ===

    # 中央に大きなグループ
    center_x, center_y = WIDTH // 2, 900

    # メインの4人（quad）- わちゃわちゃ楽しそうに
    friends = [
        (center_x - 140, center_y - 70, 90, COLORS['coral'], 'smile'),
        (center_x + 140, center_y - 90, 85, COLORS['mint'], 'wink'),
        (center_x - 90, center_y + 110, 80, COLORS['lavender'], 'open'),
        (center_x + 100, center_y + 90, 85, COLORS['sky'], 'smile'),
    ]

    # 背景に淡い円でグループ感
    draw.ellipse([center_x - 300, center_y - 220, center_x + 300, center_y + 240],
                fill=(*COLORS['yellow'], 25))

    for fx, fy, size, color, face in friends:
        draw_friend(draw, (fx, fy), size, color, face)

    # 吹き出し風の装飾（会話してる感じ）
    draw.ellipse([center_x + 200, center_y - 180, center_x + 240, center_y - 150], fill=COLORS['white'])
    draw.ellipse([center_x + 215, center_y - 145, center_x + 235, center_y - 130], fill=COLORS['white'])
    draw.ellipse([center_x + 225, center_y - 125, center_x + 238, center_y - 115], fill=COLORS['white'])

    # === 下に小さなフレンドたち（self, pair） ===

    # self - 1人でもOK
    self_x, self_y = 350, 1500
    draw_modern_blob(draw, (self_x, self_y), 100, (*COLORS['peach'], 40), squish=1.0)
    draw_friend(draw, (self_x, self_y), 70, COLORS['peach'], 'smile')
    bbox = draw.textbbox((0, 0), "self", font=font_label)
    draw.text((self_x - bbox[2]//2, self_y + 90), "self", fill=COLORS['gray'], font=font_label)

    # pair - 2人（ハイタッチしてる感じ）
    pair_x, pair_y = 900, 1550
    draw_modern_blob(draw, (pair_x, pair_y), 140, (*COLORS['mint'], 25), squish=0.7)
    draw_friend(draw, (pair_x - 55, pair_y), 55, COLORS['coral'], 'smile')
    draw_friend(draw, (pair_x + 55, pair_y), 55, COLORS['sky'], 'wink')
    # ハイタッチのキラキラ
    draw_star(draw, (pair_x, pair_y - 45), 15, COLORS['yellow'])
    bbox = draw.textbbox((0, 0), "pair", font=font_label)
    draw.text((pair_x - bbox[2]//2, pair_y + 75), "pair", fill=COLORS['gray'], font=font_label)

    # quad - 4人（小さめ）
    quad_x, quad_y = 1450, 1500
    draw_modern_blob(draw, (quad_x, quad_y), 130, (*COLORS['lavender'], 30), squish=0.85)
    mini_quads = [
        (quad_x - 45, quad_y - 35, COLORS['lavender']),
        (quad_x + 45, quad_y - 35, COLORS['mint']),
        (quad_x - 45, quad_y + 40, COLORS['yellow']),
        (quad_x + 45, quad_y + 40, COLORS['coral']),
    ]
    for qx, qy, col in mini_quads:
        draw_friend(draw, (qx, qy), 40, col, 'smile')
    bbox = draw.textbbox((0, 0), "quad", font=font_label)
    draw.text((quad_x - bbox[2]//2, quad_y + 100), "quad", fill=COLORS['gray'], font=font_label)

    # === 装飾 ===
    # 小さな丸（ドット）
    dots = [
        (120, 400, 12, COLORS['coral']),
        (1680, 400, 10, COLORS['mint']),
        (200, 1200, 8, COLORS['lavender']),
        (1600, 1200, 14, COLORS['yellow']),
        (500, 700, 6, COLORS['sky']),
        (1300, 600, 8, COLORS['peach']),
        (700, 1800, 10, COLORS['mint']),
        (1100, 1850, 8, COLORS['coral']),
        (400, 1100, 6, COLORS['lavender']),
        (1500, 900, 10, COLORS['yellow']),
    ]
    for dx, dy, dr, col in dots:
        draw.ellipse([dx-dr, dy-dr, dx+dr, dy+dr], fill=col)

    # 小さい星（友達っぽくキラキラ）
    draw_star(draw, (250, 800), 18, COLORS['yellow'])
    draw_star(draw, (1550, 700), 14, COLORS['mint'])
    draw_star(draw, (600, 1250), 12, COLORS['lavender'])
    draw_star(draw, (1400, 1100), 10, COLORS['coral'])

    # === サブタイトル ===
    subtitle = "find your crew!"
    bbox = draw.textbbox((0, 0), subtitle, font=font_sub)
    text_width = bbox[2] - bbox[0]
    draw.text(
        ((WIDTH - text_width) // 2, HEIGHT - 200),
        subtitle,
        fill=COLORS['dark'],
        font=font_sub
    )

    # === 保存 ===
    img_rgb = Image.new('RGB', (WIDTH, HEIGHT), COLORS['background'])
    img_rgb.paste(img, mask=img.split()[3] if img.mode == 'RGBA' else None)

    output_path = "/Users/sakaguchikeisuke/Project/network-art/assets/mimoza_modern.png"
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img_rgb.save(output_path, 'PNG', quality=100)
    print(f"Canvas saved to: {output_path}")

    return output_path

if __name__ == "__main__":
    main()
