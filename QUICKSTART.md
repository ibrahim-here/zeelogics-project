# Quick Start Guide

## Get Running in 3 Steps

### 1. Install Dependencies
```bash
cd zeelogics-website
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit: `http://localhost:5173`

### 3. Customize Content
Edit `src/constants/content.ts` to update:
- Hero text
- Projects
- Services
- Testimonials
- Contact info

## Change Brand Color

Edit `tailwind.config.js`:
```javascript
colors: {
  neon: '#YOUR_BRAND_COLOR', // Change from #00FF00
}
```

## Add Images

1. Place images in `public/images/`
2. Reference in `src/constants/content.ts`:
```typescript
image: '/images/your-image.jpg'
```

## Build for Production
```bash
npm run build
```

Output: `dist/` folder

## Deploy

### Vercel (Easiest)
1. Push to GitHub
2. Import in Vercel
3. Deploy ✅

### Netlify
1. Push to GitHub
2. Import in Netlify
3. Build: `npm run build`
4. Publish: `dist`

## Need Help?

- Full setup: See `SETUP.md`
- Accessibility: See `ACCESSIBILITY.md`
- Complete details: See `IMPLEMENTATION_SUMMARY.md`

## Common Tasks

### Update Hero Heading
```typescript
// src/constants/content.ts
export const HERO_CONTENT = {
  heading: 'Your New Heading',
}
```

### Add a New Project
```typescript
// src/constants/content.ts
export const PROJECTS = [
  {
    id: 'new-project',
    title: 'Project Name',
    description: 'Description...',
    ctaText: 'View Case Study',
    ctaLink: '#',
  },
  // ... existing projects
]
```

### Change Footer Email
```typescript
// src/constants/content.ts
export const FOOTER_CONTENT = {
  contact: {
    email: 'your@email.com',
  }
}
```

That's it! You're ready to go. 🚀
