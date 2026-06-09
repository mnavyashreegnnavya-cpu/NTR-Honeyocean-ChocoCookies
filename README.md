# NTR Honey Ocean Chocolates and Cookies Website

A premium, highly-responsive business website designed with a dark chocolate and gold luxury theme.

## Features
*   **Premium Design System**: Tailored HSL colors, warm gold highlights, serif Google Fonts (*Playfair Display* & *Cinzel*), and smooth micro-animations.
*   **Fully Responsive**: Fluid grid system, collapsing hamburger menus, and content shifts that adapt perfectly to mobile, tablet, and desktop layouts.
*   **WhatsApp Ordering**: Unified order links for every product inside the catalog page (`products.html`) which prepends a custom message for ordering.
*   **Interactive Components**: Dynamic category filters on the catalog, an auto-rotating testimonial slider, a lightbox modal for photo zoom-ins, and client-side contact form validation with a notification toast.
*   **SEO Optimized**: Custom semantic HTML5 tags, unique title blocks, descriptive headers, and structured schema fields.
*   **Google Maps Integration**: Beautiful, dark-themed embedded location map of the KR Puram Bangalore boutique.

---

## ⚠️ Important Asset Setup

Because the IDE terminal runs inside a secure local sandbox, automatic copying of the high-quality generated images was blocked by local OS permissions. To display the realistic food photography assets on the local server and live deployment, please perform this brief 10-second manual copy:

1. Open your File Explorer.
2. Locate the IDE brain artifacts directory:
   `C:\Users\navya shree g n\.gemini\antigravity-ide\brain\5693cba1-f27a-4661-9ff6-de583c852c58`
3. Copy the business logo and generated images, then paste them into your project's `images/` directory in the workspace under these names:
   *   `media__1780838964350.jpg` &rarr; **`images/logo.jpg`** (Your custom business logo)
   *   `hero_background_1780834304457.png` &rarr; **`images/hero-bg.png`**
   *   `honey_truffles_1780834321852.png` &rarr; **`images/truffles.png`**
   *   `chocolate_cookies_1780834343224.png` &rarr; **`images/cookies.png`**
   *   `gift_assortment_1780834358476.png` &rarr; **`images/gift-box.png`**
   *   `artisan_story_1780834373920.png` &rarr; **`images/craft-story.png`**

Once these are placed, the visual gallery, catalog, and hero headers will immediately render with fine-dining aesthetics.

---

## 🚀 Deployment Instructions for GitHub Pages

Since this website is built with vanilla HTML, CSS, and JavaScript, deploying it to GitHub Pages is completely free and takes less than 2 minutes.

### Step 1: Initialize Git and Commit Code
Open your terminal in the workspace directory and run:
```bash
# Initialize repository
git init

# Add all files (including the images folder after copying the assets)
git add .

# Commit your changes
git commit -m "Initial commit of premium NTR Honey Ocean boutique website"
```

### Step 2: Push to GitHub
1. Go to [GitHub](https://github.com) and create a new repository named `ntr-honey-ocean`.
2. Connect your local directory and push the `main` branch:
   ```bash
   # Add your GitHub remote link
   git remote add origin https://github.com/YOUR-USERNAME/ntr-honey-ocean.git
   
   # Rename default branch and push
   git branch -M main
   git push -u origin main
   ```

### Step 3: Enable GitHub Pages
1. Navigate to your repository page on GitHub.
2. Click on the **Settings** tab.
3. On the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   *   **Source**: Select *Deploy from a branch*.
   *   **Branch**: Select *main* and directory */ (root)*.
5. Click **Save**.
6. Wait 1-2 minutes. Refresh the page to see the generated deployment URL (e.g., `https://YOUR-USERNAME.github.io/ntr-honey-ocean/`).

---

## 🛠️ Local Development and Testing

To view the website locally, you can open any of the HTML files directly in your browser or run a simple local web server:
```bash
# If you have Node.js installed, launch a live reload server:
npx live-server

# If you have Python installed:
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.
