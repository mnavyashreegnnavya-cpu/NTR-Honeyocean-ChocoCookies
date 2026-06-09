import shutil
import os

src = r"C:\Users\navya shree g n\.gemini\antigravity-ide\brain\5984d985-c880-49d7-9793-993abc833a44\.tempmediaStorage\media_5984d985-c880-49d7-9793-993abc833a44_1780901835543.png"
dst = r"f:\NTR Honey ocean Chacos and Cookies\images\logo-purity.png"

try:
    print(f"Source exists: {os.path.exists(src)}")
    shutil.copy(src, dst)
    print("Success")
except Exception as e:
    print(f"Error: {e}")
