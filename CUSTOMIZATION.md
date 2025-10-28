# HikmaNova Customization Guide

This guide explains how to customize HikmaNova for your own brand and content.

## Quick Start Customization

### 1. Update Logo

Replace the placeholder logo with your own:

1. Create your logo as an SVG file
2. Place it in `client/public/` folder
3. Update the reference in `client/src/components/Layout.tsx`:

```tsx
<img 
  src="/your-logo.svg"  // Change this
  alt="Your Company" 
  className="w-10 h-10"
/>
```

Also update in `client/index.html`:
```html
<link rel="icon" type="image/png" href="/your-logo.svg" />
<link rel="apple-touch-icon" href="/your-logo.svg" />
```

### 2. Update Site Title

Edit `client/index.html`:
```html
<title>Your Company Name - Portfolio</title>
```

### 3. Update Color Scheme

Edit `client/src/index.css` and change the CSS variables:

```css
:root {
  /* Primary color */
  --primary: hsl(YOUR_HUE YOUR_SAT YOUR_LIGHT);
  --primary-foreground: hsl(0 0% 100%);
  
  /* Accent color */
  --accent: hsl(YOUR_HUE YOUR_SAT YOUR_LIGHT);
  --accent-foreground: hsl(0 0% 100%);
  
  /* ... other colors ... */
}

.dark {
  /* Dark theme colors */
  --primary: hsl(YOUR_HUE YOUR_SAT YOUR_LIGHT);
  --accent: hsl(YOUR_HUE YOUR_SAT YOUR_LIGHT);
  /* ... */
}
```

**Recommended Color Tools:**
- [HSL Color Picker](https://hslpicker.com/)
- [Tailwind Color Generator](https://uicolors.app/)
- [Coolors.co](https://coolors.co/)

### 4. Update Typography

To change fonts, edit `client/index.html`:

```html
<!-- Replace these Google Fonts imports -->
<link href="https://fonts.googleapis.com/css2?family=YOUR_SERIF:wght@700;800;900&family=YOUR_SANS:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

Then update `client/src/index.css`:

```css
@layer base {
  h1, h2, h3, h4, h5, h6 {
    @apply font-serif;  /* Your serif font */
  }
  body {
    @apply font-sans;   /* Your sans-serif font */
  }
}
```

## Content Customization

### Update Home Page

Edit `client/src/pages/Home.tsx`:

```tsx
// Update hero section
<h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
  Your Hero Title Here
</h1>
<p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
  Your tagline here
</p>

// Update featured projects array
const featuredProjects = [
  {
    id: 1,
    title: "Your Project Title",
    category: "Your Category",
    description: "Your project description",
    image: "https://your-image-url.com/image.jpg",
    slug: "your-project-slug",
  },
  // ... more projects
];

// Update services
const services = [
  {
    icon: Brain,
    title: "Your Service",
    description: "Your service description",
  },
  // ... more services
];

// Update testimonials
const testimonials = [
  {
    id: 1,
    name: "Client Name",
    role: "Client Title",
    content: "Testimonial text",
    avatar: "https://avatar-url.com/image.jpg",
  },
  // ... more testimonials
];
```

### Update About Page

Edit `client/src/pages/About.tsx`:

```tsx
// Update mission
<p className="text-lg text-muted-foreground mb-4">
  Your mission statement
</p>

// Update values
const values = [
  {
    title: "Your Value 1",
    description: "Description",
  },
  // ... more values
];

// Update team members
const team = [
  {
    name: "Team Member Name",
    role: "Their Role",
    bio: "Their bio",
    avatar: "https://avatar-url.com/image.jpg",
  },
  // ... more team members
];

// Update timeline
const timeline = [
  {
    year: "2024",
    title: "Milestone",
    description: "Description",
  },
  // ... more milestones
];
```

### Update Services Page

Edit `client/src/pages/Services.tsx`:

```tsx
// Update services array
const services = [
  {
    icon: Brain,
    title: "Your Service",
    description: "Description",
    features: [
      "Feature 1",
      "Feature 2",
      // ... more features
    ],
  },
  // ... more services
];

// Update process steps
const processSteps = [
  {
    step: "01",
    title: "Step Title",
    description: "Step description",
  },
  // ... more steps
];
```

### Update Projects

Edit `client/src/pages/Projects.tsx`:

```tsx
// Update projects array
const allProjects = [
  {
    id: 1,
    title: "Project Title",
    category: "Category",
    description: "Description",
    image: "https://image-url.com/image.jpg",
    slug: "project-slug",
    year: 2024,
  },
  // ... more projects
];

// Update categories if needed
const categories = ["All", "Your", "Categories"];
```

### Add Project Details

Edit `client/src/pages/ProjectDetail.tsx`:

```tsx
const projectsData: Record<string, any> = {
  "your-project-slug": {
    title: "Your Project Title",
    category: "Category",
    year: 2024,
    description: "Short description",
    image: "https://image-url.com/image.jpg",
    context: "Project context and background",
    approach: "Your approach and methodology",
    results: [
      "Result 1",
      "Result 2",
      // ... more results
    ],
    gallery: [
      "https://image-url.com/1.jpg",
      "https://image-url.com/2.jpg",
      // ... more images
    ],
    technologies: ["Tech1", "Tech2", "Tech3"],
    relatedProjects: ["other-project-slug"],
  },
  // ... more projects
};
```

### Update Blog Posts

Edit `client/src/pages/Blog.tsx`:

```tsx
const blogPosts = [
  {
    id: 1,
    title: "Blog Post Title",
    slug: "blog-post-slug",
    excerpt: "Short excerpt",
    content: "Full content",
    author: "Author Name",
    date: "2024-10-20",
    category: "Category",
    image: "https://image-url.com/image.jpg",
    readTime: "5 min read",
  },
  // ... more posts
];
```

### Add Blog Post Content

Edit `client/src/pages/BlogPost.tsx`:

```tsx
const blogPostsData: Record<string, any> = {
  "your-post-slug": {
    title: "Post Title",
    author: "Author",
    date: "2024-10-20",
    category: "Category",
    readTime: "10 min read",
    image: "https://image-url.com/image.jpg",
    content: `
      <h2>Section Title</h2>
      <p>Your content here</p>
      <ul>
        <li>Point 1</li>
        <li>Point 2</li>
      </ul>
    `,
  },
  // ... more posts
};
```

### Update Contact Page

Edit `client/src/pages/Contact.tsx`:

```tsx
// Update contact info
<a href="mailto:your@email.com">
  your@email.com
</a>

<a href="tel:+1234567890">
  +1 (234) 567-890
</a>

<p>Your City, Country</p>

// Update FAQ
{[
  {
    q: "Your question",
    a: "Your answer",
  },
  // ... more FAQs
].map((item, idx) => (
  // ...
))}
```

## Advanced Customization

### Add New Pages

1. Create a new file in `client/src/pages/YourPage.tsx`
2. Add route in `client/src/App.tsx`:

```tsx
import YourPage from "./pages/YourPage";

function Router() {
  return (
    <Switch>
      {/* ... existing routes ... */}
      <Route path={"/your-page"} component={YourPage} />
    </Switch>
  );
}
```

3. Add navigation link in `client/src/components/Layout.tsx`:

```tsx
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Your Page", href: "/your-page" },
  // ... other links
];
```

### Customize Layout

Edit `client/src/components/Layout.tsx` to modify:
- Header styling and layout
- Navigation links
- Footer content
- Mobile menu behavior

### Add New Components

Create reusable components in `client/src/components/`:

```tsx
// client/src/components/YourComponent.tsx
export default function YourComponent() {
  return (
    <div className="your-classes">
      Your component content
    </div>
  );
}
```

Import and use in pages:

```tsx
import YourComponent from "@/components/YourComponent";

export default function YourPage() {
  return (
    <Layout>
      <YourComponent />
    </Layout>
  );
}
```

### Modify Styling

Global styles are in `client/src/index.css`. Component styles use Tailwind classes.

For custom styles, add to `index.css`:

```css
@layer components {
  .your-custom-class {
    @apply your-tailwind-classes;
  }
}
```

## SEO Customization

### Update Meta Tags

Edit `client/index.html`:

```html
<meta name="description" content="Your site description" />
<meta name="keywords" content="keyword1, keyword2, keyword3" />
<meta name="author" content="Your Name" />
<meta property="og:title" content="Your Title" />
<meta property="og:description" content="Your description" />
<meta property="og:image" content="https://your-image.jpg" />
```

### Add Structured Data

Add JSON-LD in page components:

```tsx
useEffect(() => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Your Company",
    "url": "https://your-domain.com",
    "logo": "https://your-domain.com/logo.svg",
  };
  
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}, []);
```

## Performance Optimization

### Image Optimization

1. Use modern formats (WebP)
2. Compress images before uploading
3. Use appropriate sizes for different screens
4. Lazy load images

### Code Splitting

Import components dynamically:

```tsx
import { lazy, Suspense } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### Bundle Analysis

```bash
npm install -D rollup-plugin-visualizer
```

Add to `vite.config.ts`:

```ts
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    // ... other plugins
    visualizer(),
  ],
});
```

## Testing Customizations

After making changes:

1. **Local Testing**:
   ```bash
   pnpm dev
   ```
   Test all pages and features

2. **Build Testing**:
   ```bash
   pnpm build
   pnpm preview
   ```
   Test production build locally

3. **Responsive Testing**:
   - Test on mobile, tablet, desktop
   - Use Chrome DevTools device emulation

4. **Cross-browser Testing**:
   - Test on Chrome, Firefox, Safari, Edge

## Common Customizations Checklist

- [ ] Update logo
- [ ] Change colors
- [ ] Update fonts
- [ ] Update site title
- [ ] Update hero content
- [ ] Update projects
- [ ] Update services
- [ ] Update team members
- [ ] Update blog posts
- [ ] Update contact information
- [ ] Update meta tags
- [ ] Test on multiple devices
- [ ] Test on multiple browsers
- [ ] Optimize images
- [ ] Deploy to production

## Getting Help

- Check the main [README.md](README.md)
- Review [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help
- Check component documentation in code comments
- Test changes locally before deploying

---

Happy customizing! 🎨

