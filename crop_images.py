from PIL import Image
import os

src_path = r"C:\Users\navya shree g n\.gemini\antigravity-ide\brain\5693cba1-f27a-4661-9ff6-de583c852c58\media__1780856292495.jpg"
dest_dir = r"f:\NTR Honey ocean Chacos and Cookies\images"

# Make sure dest_dir exists
os.makedirs(dest_dir, exist_ok=True)

if os.path.exists(src_path):
    img = Image.open(src_path)
    width, height = img.size
    
    # Save full image in dest_dir
    img.save(os.path.join(dest_dir, "packages.jpg"))
    print("Saved full packages.jpg")
    
    # Crop top half (chocolates)
    # y ranges from 0 to height // 2
    top_half = img.crop((0, 0, width, height // 2))
    top_half.save(os.path.join(dest_dir, "chocolate-package.jpg"))
    print("Saved chocolate-package.jpg")
    
    # Crop bottom half (cookies)
    # y ranges from height // 2 to height
    bottom_half = img.crop((0, height // 2, width, height))
    bottom_half.save(os.path.join(dest_dir, "cookie-package.jpg"))
    print("Saved cookie-package.jpg")
else:
    print(f"Source file not found at {src_path}")
