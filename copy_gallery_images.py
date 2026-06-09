import os
import shutil

src_dir = r"C:\Users\navya shree g n\.gemini\antigravity-ide\brain\5693cba1-f27a-4661-9ff6-de583c852c58"
dest_dir = r"f:\NTR Honey ocean Chacos and Cookies\images"

# Ensure dest_dir exists
os.makedirs(dest_dir, exist_ok=True)

files = {
    "hero_background_1780834304457.png": "hero-bg.png",
    "honey_truffles_1780834321852.png": "truffles.png",
    "chocolate_cookies_1780834343224.png": "cookies.png",
    "gift_assortment_1780834358476.png": "gift-box.png",
    "artisan_story_1780834373920.png": "craft-story.png"
}

for src_name, dest_name in files.items():
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    
    if os.path.exists(src_path):
        try:
            shutil.copy2(src_path, dest_path)
            print(f"Copied {src_name} -> {dest_name}")
        except Exception as e:
            print(f"Failed to copy {src_name}: {e}")
    else:
        print(f"Source not found: {src_path}")
