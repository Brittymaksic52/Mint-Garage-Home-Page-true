# GitHub Upload Guide for Mint Garage Shopify Theme

## Files to Download

You need to download the complete **`shopify-theme`** folder which contains:

```
shopify-theme/
├── assets/
│   ├── base.css
│   ├── animations.css
│   └── global.js
├── config/
│   └── settings_schema.json
├── layout/
│   └── theme.liquid
├── locales/
│   └── en.default.json
├── sections/
│   ├── header.liquid
│   ├── hero-section.liquid
│   ├── shop-by-category.liquid
│   ├── featured-products.liquid
│   ├── customer-testimonials.liquid
│   ├── before-after-gallery.liquid
│   ├── why-mint-garage.liquid
│   ├── newsletter-signup.liquid
│   └── footer.liquid
├── snippets/
│   └── meta-tags.liquid
├── templates/
│   ├── index.liquid
│   ├── product.liquid
│   ├── collection.liquid
│   └── page.liquid
└── SHOPIFY_DEPLOYMENT_GUIDE.md
```

## How to Download in Replit

1. **Click the three dots (⋯)** in the file explorer next to the `shopify-theme` folder
2. **Select "Download"** - this will download the entire folder as a zip file
3. **Extract the zip file** on your computer to get the `shopify-theme` folder

## GitHub Desktop Setup Steps

### Step 1: Create New Repository
1. Open **GitHub Desktop**
2. Click **"Create a New Repository on your hard drive"**
3. Repository details:
   - **Name**: `mint-garage-shopify-theme`
   - **Description**: `Complete Shopify theme for Mint Garage with all animations and e-commerce functionality`
   - **Local Path**: Choose where you want the repository folder
   - **Initialize with README**: ✓ Check this box
   - **Git ignore**: Choose "Node" or leave blank
   - **License**: Choose "MIT" or your preferred license

### Step 2: Add Theme Files
1. **Copy the entire `shopify-theme` folder contents** into your new repository folder
2. **Rename `SHOPIFY_DEPLOYMENT_GUIDE.md`** to `README.md` (replace the existing one)
3. Your repository should now contain:
   ```
   mint-garage-shopify-theme/
   ├── assets/
   ├── config/
   ├── layout/
   ├── locales/
   ├── sections/
   ├── snippets/
   ├── templates/
   └── README.md
   ```

### Step 3: Commit and Push
1. **GitHub Desktop will show all new files** in the changes tab
2. **Write a commit message**: "Initial commit: Complete Mint Garage Shopify theme"
3. **Click "Commit to main"**
4. **Click "Publish repository"** to upload to GitHub
   - Choose if you want it **Public** or **Private**
   - **Public**: Anyone can see your theme (good for portfolio)
   - **Private**: Only you can access it

### Step 4: Repository Settings (Optional)
After uploading, you can:
1. **Add repository description** on GitHub.com
2. **Add topics/tags**: `shopify-theme`, `e-commerce`, `garage-renovation`, `react-to-shopify`
3. **Create releases** for different versions
4. **Set up branch protection** if working with a team

## Repository Structure Benefits

Having your theme on GitHub provides:
- **Version control** for theme updates
- **Backup** of all your code
- **Collaboration** with developers
- **Portfolio showcase** of your work
- **Easy deployment** to Shopify stores

## Next Steps After GitHub Upload

1. **Share repository link** with developers or clients
2. **Use Shopify CLI** to deploy directly from GitHub
3. **Set up automated deployment** with GitHub Actions (advanced)
4. **Create documentation** for theme customization

## Shopify CLI Deployment from GitHub

Once on GitHub, you can deploy using:
```bash
# Clone repository
git clone https://github.com/yourusername/mint-garage-shopify-theme.git

# Navigate to theme
cd mint-garage-shopify-theme

# Deploy to Shopify
shopify theme push --store=your-store-name.myshopify.com
```

Your complete Shopify theme is now ready for GitHub and can be easily deployed to any Shopify store while maintaining full version control.