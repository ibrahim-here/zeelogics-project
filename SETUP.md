# Zeelogics Website - Setup Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies

```bash
cd zeelogics-website
npm install
```

This will install all required packages:
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- Vite (build tool)

### 2. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 4. Preview Production Build

```bash
npm run preview
```

## Project Structure

```
zeelogics-website/
├── src/
│   ├── components/
│   │   ├── layout/          # Footer
│   │   ├── sections/        # Hero, Projects, About, etc.
│   │   ├── ui/              # Button, Card, etc.
│   │   └── shared/          # SectionContainer, AnimatedElement
│   ├── constants/           # Content data
│   ├── types/               # TypeScript interfaces
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies

```

## Customization

### Update Brand Color

Edit `tailwind.config.js` and `src/index.css`:

```javascript
// tailwind.config.js
colors: {
  neon: '#00FF00', // Change to your brand color
}
```

### Update Content

All content is centralized in `src/constants/content.ts`:
- Hero text
- Projects
- Services
- Testimonials
- Footer information

### Add Images

1. Place images in the `public` folder
2. Reference them in `src/constants/content.ts`:

```typescript
{
  id: 'project-1',
  title: 'Project Name',
  image: '/images/project-1.jpg', // Path relative to public folder
  // ...
}
```

## Development Tips

### Hot Module Replacement (HMR)

Vite provides instant HMR - changes appear immediately without full page reload.

### TypeScript

All components are fully typed. The IDE will provide autocomplete and type checking.

### Responsive Design

All components use Tailwind's responsive utilities:
- Mobile: default styles
- Tablet: `md:` prefix (768px+)
- Desktop: `lg:` prefix (1024px+)

### Animations

Framer Motion animations are configured to:
- Trigger on scroll (viewport detection)
- Respect `prefers-reduced-motion`
- Stagger for card grids

## Troubleshooting

### TypeScript Errors Before Installation

If you see TypeScript errors before running `npm install`, this is normal. They will resolve once dependencies are installed.

### Port Already in Use

If port 5173 is in use, Vite will automatically try the next available port.

### Build Errors

1. Clear cache: `rm -rf node_modules dist`
2. Reinstall: `npm install`
3. Rebuild: `npm run build`

## Performance Optimization

The build is already optimized with:
- ✅ Code splitting (React, Framer Motion, Icons in separate chunks)
- ✅ Minification (Terser)
- ✅ Tree shaking (unused code removed)
- ✅ CSS optimization
- ✅ Font display: swap

### Lighthouse Targets

- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Push code to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other Hosts

Build the project and upload the `dist` folder to any static hosting service.

## Environment Variables

Create `.env` file for environment-specific values:

```env
VITE_SITE_URL=https://zeelogics.com
VITE_CONTACT_EMAIL=hello@zeelogics.com
VITE_GA_ID=UA-XXXXXXXXX-X
```

Access in code:
```typescript
const siteUrl = import.meta.env.VITE_SITE_URL;
```

## Support

For issues or questions:
- Check ACCESSIBILITY.md for accessibility documentation
- Review component files for implementation details
- Consult Tailwind CSS and Framer Motion documentation

## Next Steps

1. Run `npm install`
2. Run `npm run dev`
3. Customize content in `src/constants/content.ts`
4. Update brand color in `tailwind.config.js`
5. Add your logo and images to `public` folder
6. Test on different devices and browsers
7. Run Lighthouse audit
8. Deploy to production
