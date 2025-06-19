# Mint Garage Shopify Theme

A professional Shopify theme designed specifically for garage renovation and storage companies. Features a modern dark design with green accents, smooth animations, and comprehensive e-commerce functionality.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading with lazy loading and optimized assets
- **SEO Ready**: Structured data, meta tags, and semantic HTML
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Dark Theme**: Professional dark design with green accent colors
- **Animations**: Smooth scroll-triggered animations using GSAP
- **E-commerce Ready**: Full product pages, collections, and cart functionality

## Installation

1. **Download the theme files** from this repository
2. **Create a ZIP file** containing all theme files (config, layout, sections, templates, assets, snippets)
3. **Upload to Shopify**:
   - Go to your Shopify admin panel
   - Navigate to Online Store > Themes
   - Click "Upload theme"
   - Select the ZIP file
   - Click "Upload"

## Theme Structure

```
shopify-theme/
├── config/
│   ├── settings_schema.json    # Theme customization options
│   └── settings_data.json      # Default theme settings
├── layout/
│   └── theme.liquid           # Main theme layout
├── templates/
│   ├── index.liquid           # Homepage template
│   ├── product.liquid         # Product page template
│   ├── collection.liquid     # Collection page template
│   └── page.liquid           # Static page template
├── sections/
│   ├── hero-section.liquid
│   ├── header-section.liquid
│   ├── shop-by-category.liquid
│   ├── why-mint-garage.liquid
│   ├── before-after-gallery.liquid
│   ├── dealer-locator.liquid
│   ├── youtube-section.liquid
│   ├── trusted-partners.liquid
│   ├── customer-testimonials.liquid
│   ├── newsletter-signup.liquid
│   └── footer-section.liquid
├── snippets/
│   ├── meta-tags.liquid       # SEO meta tags
│   └── pagination.liquid     # Pagination component
└── assets/
    ├── application.css        # Custom CSS
    └── global.js             # Theme JavaScript
```

## Customization

### Colors
The theme uses CSS custom properties for easy color customization:
- Primary Color: `#8dc049` (Green)
- Secondary Color: `#b8d66b` (Light Green)
- Accent Color: `#7daf3a` (Dark Green)

### Fonts
- Primary Font: Montserrat
- Fallback: Helvetica, Arial, sans-serif

### Sections

Each section is customizable through the Shopify theme editor:

1. **Hero Section**: Main banner with video background, CTA buttons, and stats
2. **Header Section**: Navigation with logo, menu, and contact info
3. **Shop by Category**: Product category grid with hover effects
4. **Why Mint Garage**: Benefits section with icons and descriptions
5. **Before/After Gallery**: Project showcase with hover reveal
6. **Dealer Locator**: Interactive dealer directory with search
7. **YouTube Section**: Video gallery with featured video
8. **Trusted Partners**: Partner logo grid with descriptions
9. **Customer Testimonials**: Review cards with ratings and photos
10. **Newsletter Signup**: Email collection with benefits
11. **Footer Section**: Contact info, links, and social media

## Setup Requirements

### Menus
Create the following menus in Shopify admin:
- `main-menu`: Primary navigation
- `footer`: Footer links
- `legal`: Legal/policy links

### Collections
Create these collections for proper functionality:
- `flooring`: Flooring products
- `storage`: Storage solutions
- `workbenches`: Workbench products
- `related-products`: Products for related items section

### Pages
Create these pages:
- `consultation`: Free consultation form
- `privacy-policy`: Privacy policy
- `terms-of-service`: Terms of service
- `shipping-policy`: Shipping information

### Blog (Optional)
Create a blog for content marketing:
- Blog handle: `news` or `blog`

## Configuration

### Theme Settings
Access through Shopify admin > Online Store > Themes > Customize:

1. **Colors**: Customize primary, secondary, and accent colors
2. **Typography**: Select fonts for headings and body text
3. **Homepage**: Configure hero content, stats, and descriptions
4. **Contact**: Set phone number, email, and address
5. **Social Media**: Add social media URLs
6. **SEO**: Upload social sharing image

### Section Settings
Each section has customizable content through blocks:

- **Category Blocks**: Add product categories with images and links
- **Benefit Blocks**: Add company benefits with icons
- **Transformation Blocks**: Add before/after project images
- **Dealer Blocks**: Add dealer locations with contact info
- **Video Blocks**: Add YouTube videos to gallery
- **Partner Blocks**: Add partner logos and information
- **Testimonial Blocks**: Add customer reviews and ratings
- **Service Blocks**: Add footer service links

## Performance

### Optimization Features
- Lazy loading for images
- Minified CSS and JavaScript
- Optimized image delivery
- Efficient animations with reduced motion support
- Mobile-first responsive design

### Loading Strategy
- Critical CSS inlined
- Non-critical resources loaded asynchronously
- Progressive image enhancement
- Intersection Observer for scroll animations

## SEO Features

- Structured data for organization and products
- Open Graph tags for social sharing
- Twitter Card meta tags
- Semantic HTML structure
- Image alt text support
- Meta descriptions and titles

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+
- iOS Safari 12+
- Android Chrome 70+

## Development

### CSS Architecture
- Utility-first approach with Tailwind CSS
- Custom properties for theming
- Mobile-first media queries
- BEM methodology for custom components

### JavaScript Features
- Vanilla JavaScript (no jQuery dependency)
- Modern ES6+ syntax
- Progressive enhancement
- Error handling and fallbacks

## Support

For theme customization or technical support:
1. Check Shopify's theme documentation
2. Review this README for configuration options
3. Test changes in a development theme first
4. Use Shopify's theme inspector for debugging

## License

This theme is designed specifically for Mint Garage and includes proprietary design elements. Commercial use requires proper licensing.

## Changelog

### Version 1.0.0
- Initial release
- All homepage sections implemented
- Product and collection templates
- Mobile responsive design
- SEO optimization
- Performance optimization