# HikmaNova Deployment Guide

This guide covers deploying HikmaNova to various platforms.

## GitHub Pages Deployment

GitHub Pages is the recommended platform for static sites built with Vite.

### Prerequisites
- GitHub account
- Git installed locally
- Project pushed to GitHub

### Step 1: Configure Vite for GitHub Pages

Edit `vite.config.ts` and add the `base` option:

```ts
export default defineConfig({
  base: '/hikmanova/',  // Replace 'hikmanova' with your repository name
  plugins,
  // ... rest of config
});
```

### Step 2: Build the Project

```bash
pnpm install
pnpm build
```

This creates a `dist/` folder with the production build.

### Step 3: Deploy to GitHub Pages

**Option A: Using GitHub Actions (Recommended)**

Create `.github/workflows/deploy.yml`:

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
          publish_dir: ./dist
```

**Option B: Manual Deployment**

```bash
# Build the project
pnpm build

# Create a new branch for GitHub Pages
git checkout --orphan gh-pages

# Remove all files except dist
git rm -rf .

# Move dist contents to root
mv dist/* .
rm -rf dist

# Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

### Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select **gh-pages** branch and **/(root)** folder
5. Click **Save**

Your site will be available at `https://yourusername.github.io/hikmanova/`

## Other Deployment Platforms

### Vercel

Vercel has excellent support for Vite projects and offers automatic deployments from Git.

1. Go to [vercel.com](https://vercel.com)
2. Click **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Vite configuration
5. Click **Deploy**

Your site will be live at `https://your-project.vercel.app`

**Environment Variables** (if needed):
- Add in Vercel dashboard under Project Settings → Environment Variables

### Netlify

Netlify provides easy deployment with automatic builds.

1. Go to [netlify.com](https://netlify.com)
2. Click **New site from Git**
3. Connect your GitHub account
4. Select your repository
5. Configure build settings:
   - **Build command**: `pnpm build`
   - **Publish directory**: `dist`
6. Click **Deploy**

Your site will be live at `https://your-site.netlify.app`

### AWS S3 + CloudFront

For a more scalable solution:

1. Create an S3 bucket
2. Enable static website hosting
3. Upload contents of `dist/` folder
4. Create CloudFront distribution pointing to S3
5. Configure custom domain (optional)

### Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize project: `firebase init`
4. Build: `pnpm build`
5. Deploy: `firebase deploy`

## Custom Domain Setup

### For GitHub Pages

1. Add your domain to DNS provider:
   - For apex domain: Add A records pointing to GitHub's IPs
   - For subdomain: Add CNAME record pointing to `yourusername.github.io`

2. In repository Settings → Pages:
   - Enter your custom domain
   - Enable "Enforce HTTPS"

### For Vercel/Netlify

1. Add domain in platform dashboard
2. Update DNS records as instructed
3. Enable HTTPS (automatic)

## Environment Variables

If you need environment variables:

1. Create `.env.local` in project root
2. Add variables: `VITE_API_URL=https://api.example.com`
3. Access in code: `import.meta.env.VITE_API_URL`

**Note**: Only variables prefixed with `VITE_` are exposed to the browser.

## Performance Optimization

### Image Optimization

Before deploying, optimize images:

```bash
# Using ImageOptim or similar tools
# Reduce image sizes without quality loss
```

### Caching

Configure cache headers for your hosting:

```
# For static assets (images, fonts)
Cache-Control: max-age=31536000, immutable

# For HTML files
Cache-Control: max-age=3600, must-revalidate
```

### CDN

Consider using a CDN for faster global delivery:
- Cloudflare (free tier available)
- AWS CloudFront
- Netlify CDN (included)

## SSL/HTTPS

All modern hosting platforms provide free HTTPS:
- GitHub Pages: Automatic
- Vercel: Automatic
- Netlify: Automatic
- AWS: Use AWS Certificate Manager (free)

## Monitoring & Analytics

### Google Analytics

Add to `client/index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Sentry (Error Tracking)

```bash
npm install @sentry/react
```

Initialize in `App.tsx`:

```tsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: process.env.NODE_ENV,
});
```

## Troubleshooting

### Site not loading

- Check that `base` in `vite.config.ts` matches your deployment path
- Verify DNS configuration for custom domains
- Check browser console for errors

### Styles not loading

- Ensure `base` path is correct in `vite.config.ts`
- Clear browser cache
- Check that CSS files are in `dist/` folder

### 404 on page refresh

For client-side routing, configure your host:

**GitHub Pages**: Add `_redirects` file (not supported, use hash routing instead)

**Netlify**: Add `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Vercel**: Add `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## Maintenance

### Regular Updates

```bash
# Check for dependency updates
pnpm outdated

# Update dependencies
pnpm update

# Update major versions
pnpm upgrade
```

### Monitoring

- Monitor error tracking (Sentry)
- Check analytics (Google Analytics)
- Review performance metrics (Lighthouse)
- Test on multiple browsers

### Backups

- Keep Git repository as backup
- Archive builds periodically
- Document any custom configurations

## Support

For deployment issues:
1. Check platform-specific documentation
2. Review build logs
3. Test locally before deploying
4. Contact platform support if needed

---

Happy deploying! 🚀

