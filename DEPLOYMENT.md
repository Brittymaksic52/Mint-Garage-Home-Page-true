# GitHub Repository Setup Guide

Follow these steps to upload your Mint Garage project to GitHub:

## Step 1: Download Project Files

Since this is a Replit environment, you'll need to download the project files to your local machine:

1. In Replit, click the three dots menu (⋯) in the file explorer
2. Select "Download as zip"
3. Extract the zip file to your desired location on your computer

## Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the repository details:
   - **Repository name**: `mint-garage-website`
   - **Description**: `Modern, interactive website for Mint Garage - garage renovation and storage company`
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 3: Upload to GitHub

### Option A: Using Git Command Line (Recommended)

1. Open terminal/command prompt in your project folder
2. Run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Mint Garage website with React, TypeScript, and Tailwind CSS"

# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/mint-garage-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Option B: Using GitHub Desktop

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click "Add an Existing Repository from your Hard Drive"
4. Select your project folder
5. Click "Publish repository" to upload to GitHub

### Option C: Upload via GitHub Web Interface

1. On your new GitHub repository page, click "uploading an existing file"
2. Drag and drop all project files (except node_modules folder)
3. Write commit message: "Initial commit: Mint Garage website"
4. Click "Commit changes"

## Step 4: Verify Upload

1. Go to your GitHub repository page
2. Ensure all files are present:
   - `client/` folder with React components
   - `server/` folder with backend code
   - `shared/` folder with schemas
   - `package.json`, `README.md`, `.gitignore`
   - `docs/` folder with integration guides

## Step 5: Set Up Repository Settings

1. Go to repository Settings tab
2. Under "General" → "Features", enable:
   - Issues (for bug tracking)
   - Wiki (for documentation)
3. Under "Pages", set up GitHub Pages if desired for documentation

## Important Notes

- **Never commit**: `node_modules/`, `.env` files, or build artifacts
- **Environment Variables**: Create `.env` file locally using `.env.example` as template
- **Database**: Set up PostgreSQL database for development
- **Secrets**: Store API keys in GitHub Secrets for deployment

## Next Steps After GitHub Setup

1. **Clone for Development**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/mint-garage-website.git
   cd mint-garage-website
   npm install
   ```

2. **Set Up Environment**:
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

3. **Database Setup**:
   ```bash
   npm run db:push
   ```

4. **Start Development**:
   ```bash
   npm run dev
   ```

## Deployment Options

After GitHub setup, you can deploy to:
- **Vercel**: Connect GitHub repo for automatic deployments
- **Railway**: PostgreSQL hosting with easy GitHub integration
- **Heroku**: Full-stack application hosting
- **Shopify**: Convert to custom theme (see docs/shopify-integration.md)

Your project is now ready for version control, collaboration, and deployment!