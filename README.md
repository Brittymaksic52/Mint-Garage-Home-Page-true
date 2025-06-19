# Mint Garage Shopify Theme

A professional Shopify theme for garage renovation and storage companies.

## Features

- Dark professional design with green accents
- Mobile responsive layout
- Hero section with customizable content
- Product showcase functionality
- Clean, modern typography

## Installation from GitHub

### Method 1: GitHub Integration (Recommended)

1. **Fork this repository** to your GitHub account
2. **Set up GitHub integration** in Shopify:
   - Go to Shopify Admin → Online Store → Themes
   - Click "Add theme" → "Connect from GitHub"
   - Select your forked repository
   - Choose the main branch
   - Click "Connect"

### Method 2: Shopify CLI Deployment

1. **Install Shopify CLI**:
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Clone this repository**:
   ```bash
   git clone https://github.com/your-username/mint-garage-theme.git
   cd mint-garage-theme
   ```

3. **Authenticate with Shopify**:
   ```bash
   shopify auth login
   ```

4. **Deploy to your store**:
   ```bash
   shopify theme push --store=your-store.myshopify.com
   ```

### Method 3: Manual Download

1. Download the repository as ZIP
2. Extract and upload individual files through Shopify admin
3. Go to Online Store → Themes → Actions → Edit code
4. Upload files to their respective folders

## Configuration

After installation:

1. **Customize theme settings**:
   - Go to Online Store → Themes → Customize
   - Modify colors, fonts, and content
   - Upload your logo

2. **Set up sections**:
   - Edit hero section title and description
   - Configure product collections
   - Add contact information

3. **Create required pages**:
   - About page
   - Contact page
   - Consultation page

## File Structure

```
├── config/
│   └── settings_schema.json    # Theme customization options
├── layout/
│   └── theme.liquid           # Main theme layout
├── templates/
│   ├── index.liquid           # Homepage
│   ├── product.liquid         # Product pages
│   ├── collection.liquid     # Collection pages
│   └── page.liquid           # Static pages
└── sections/
    ├── hero.liquid            # Hero banner section
    └── products.liquid        # Featured products section
```

## Customization

### Colors
The theme uses CSS custom properties that can be modified in the theme settings:
- Primary: #8dc049 (Green)
- Background: #000000 (Black)
- Text: #FFFFFF (White)

### Typography
- Primary font: Montserrat
- Weights: 400 (regular), 600 (semibold), 700 (bold)

## Support

For technical issues:
1. Check Shopify theme documentation
2. Verify all required files are uploaded
3. Test in Shopify's theme inspector
4. Contact theme developer for custom modifications

## License

Custom theme for Mint Garage. All rights reserved.