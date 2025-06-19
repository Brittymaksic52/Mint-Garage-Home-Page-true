# Shopify CLI Setup Guide

## Fix Authentication Error (401)

The "Invalid API key or access token" error occurs when Shopify CLI can't authenticate with your store. Here's how to fix it:

### Option 1: Use Correct Store URL Format

Make sure you're using the correct store URL format:

```bash
# Correct formats:
shopify theme push --store=your-actual-store-name.myshopify.com
shopify theme push --store=your-actual-store-name

# NOT "your-store.myshopify.com" - use your real store name
```

### Option 2: Create a Private App (Recommended)

1. **Go to your Shopify Admin**
2. **Navigate to**: Settings → Apps and sales channels → Develop apps
3. **Click "Create an app"**
4. **App name**: "Theme Development"
5. **Configure Admin API scopes**:
   - Check: `write_themes` (required for theme deployment)
   - Check: `read_themes` (required for theme management)
6. **Click "Save"**
7. **Install the app on your store**
8. **Copy the Admin API access token**

### Option 3: Use Theme Access Token

1. **In Shopify Admin**: Online Store → Themes
2. **Click "..." on any theme** → "Edit code"
3. **Look for theme access in the URL** or use theme-specific tokens

### Deploy with Private App Token

```bash
# Method 1: Use access token directly
shopify theme push --store=YOUR-STORE-NAME.myshopify.com --theme-token=YOUR-ACCESS-TOKEN

# Method 2: Set environment variables
export SHOPIFY_CLI_THEME_TOKEN=YOUR-ACCESS-TOKEN
export SHOPIFY_STORE=YOUR-STORE-NAME.myshopify.com
shopify theme push
```

### Alternative: Manual Upload

If CLI continues to fail:

1. **Download theme as ZIP**:
   ```bash
   cd path/to/theme-files
   zip -r mint-garage-theme.zip . -x "*.git*" "node_modules/*" "*.md"
   ```

2. **Upload in Shopify Admin**:
   - Online Store → Themes
   - "Add theme" → "Upload theme file"
   - Select your ZIP file

### Troubleshooting Commands

```bash
# Check current authentication
shopify auth whoami

# Re-authenticate
shopify auth logout
shopify auth login

# List available stores
shopify store list

# Test connection
shopify theme list --store=YOUR-STORE.myshopify.com
```

### GitHub Integration (Easiest Alternative)

Instead of CLI, use Shopify's GitHub integration:

1. **Push theme to GitHub repository**
2. **In Shopify Admin**: Online Store → Themes
3. **"Add theme" → "Connect from GitHub"**
4. **Select your repository and branch**
5. **Shopify handles deployment automatically**

## Need Your Store Details

To help you deploy, I need:

1. **Your actual store name** (the part before .myshopify.com)
2. **Whether you've created a private app** with theme permissions
3. **Your preferred deployment method** (CLI vs GitHub vs manual upload)

The authentication is working (you're logged in), but the store connection needs the correct credentials and store name.