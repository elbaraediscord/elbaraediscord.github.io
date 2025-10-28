# GitHub Pages Deployment Guide for HikmaNova

This guide will walk you through deploying HikmaNova to GitHub Pages at:
**https://elbaraediscord.github.io/hikmanova-test/**

## Prerequisites

- Git installed on your computer
- GitHub account (elbaraediscord)
- The HikmaNova project files

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Fill in the repository details:
   - **Repository name**: `hikmanova-test`
   - **Description**: HikmaNova - Innovation & Technology Portfolio
   - **Public**: Yes (required for GitHub Pages)
   - **Initialize with**: Leave empty (we'll push existing code)
3. Click **Create repository**

## Step 2: Initialize Git and Push Code

Open your terminal in the HikmaNova project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: HikmaNova portfolio website"

# Add remote repository
git remote add origin https://github.com/elbaraediscord/hikmanova-test.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository: https://github.com/elbaraediscord/hikmanova-test
2. Click **Settings** (top right)
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Select **main** and **/root** folder
5. Click **Save**

GitHub will now build and deploy your site. This may take 1-2 minutes.

## Step 4: Verify Deployment

After a few minutes, your site will be live at:
**https://elbaraediscord.github.io/hikmanova-test/**

You can check the deployment status:
1. Go to your repository
2. Click **Settings** → **Pages**
3. Look for the green checkmark and "Your site is live at..." message

## Step 5: Set Up Automatic Deployments (Optional)

To automatically deploy when you push changes, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      
      - name: Install pnpm
        run: npm install -g pnpm
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

Then push this file to your repository:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

## Troubleshooting

### Site not loading
- Wait 2-3 minutes for GitHub Pages to build and deploy
- Check that the repository is public
- Verify the branch is set to `main` in Pages settings

### Styles not loading
- This is likely due to the base path. The `vite.config.ts` has been configured with `base: '/hikmanova-test/'`
- If styles still don't load, check the browser console for 404 errors

### 404 on page refresh
- GitHub Pages requires a redirect for client-side routing
- Create `dist/public/404.html` with the same content as `index.html`
- This allows GitHub Pages to serve `index.html` for all routes

## Making Updates

To update your site after making changes:

```bash
# Make your changes to the code

# Build the project
pnpm build

# Commit changes
git add .
git commit -m "Update: your changes description"

# Push to GitHub
git push origin main
```

If you set up the GitHub Actions workflow, the deployment will happen automatically!

## Custom Domain (Optional)

To use a custom domain:

1. Go to your repository **Settings** → **Pages**
2. Under "Custom domain", enter your domain (e.g., `hikmanova.com`)
3. Update your domain's DNS records:
   - For apex domain: Add A records pointing to GitHub's IPs
   - For subdomain: Add CNAME record pointing to `elbaraediscord.github.io`

GitHub will automatically handle HTTPS with Let's Encrypt.

## Performance Tips

- The site is optimized for performance
- Images use lazy loading
- CSS and JavaScript are minified
- Total bundle size: ~1.1MB (gzipped: ~193KB)

## Support

For GitHub Pages documentation: https://docs.github.com/en/pages
For HikmaNova customization: See `CUSTOMIZATION.md`
For general deployment help: See `DEPLOYMENT.md`

---

Your HikmaNova portfolio is ready to go live! 🚀

