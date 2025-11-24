# Deployment Checklist

## Pre-Launch Checklist

### 1. Installation & Setup
- [ ] Run `npm install` in the `zeelogics-website` directory
- [ ] Run `npm run dev` to verify everything works
- [ ] Check that all pages load without errors

### 2. Content Customization
- [ ] Update brand color in `tailwind.config.js` (replace #00FF00)
- [ ] Update all content in `src/constants/content.ts`:
  - [ ] Hero section text
  - [ ] Projects (add real project data)
  - [ ] About Us text
  - [ ] Services descriptions
  - [ ] Testimonials (add real client quotes)
  - [ ] Contact email and phone
  - [ ] Social media links
- [ ] Update meta tags in `index.html`:
  - [ ] Page title
  - [ ] Description
  - [ ] OG image URL
  - [ ] Twitter card image
  - [ ] Structured data (company info)

### 3. Assets
- [ ] Add company logo to `public/` folder
- [ ] Add project images to `public/images/`
- [ ] Add favicon (replace `/vite.svg`)
- [ ] Add OG image for social sharing
- [ ] Optimize all images (compress, resize)

### 4. Links & Navigation
- [ ] Update all CTA links (currently set to `#`)
- [ ] Update footer navigation links
- [ ] Update social media URLs
- [ ] Test all internal anchor links work

### 5. Testing

#### Functionality
- [ ] Test all buttons and links
- [ ] Test smooth scroll between sections
- [ ] Test scroll indicator animation
- [ ] Test hover effects on cards
- [ ] Verify animations trigger on scroll

#### Responsive Design
- [ ] Test on mobile (320px, 375px, 414px)
- [ ] Test on tablet (768px, 1024px)
- [ ] Test on desktop (1280px, 1920px)
- [ ] Test landscape orientation on mobile
- [ ] Verify no horizontal scroll at any size

#### Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

#### Accessibility
- [ ] Test keyboard navigation (Tab, Shift+Tab, Enter)
- [ ] Test skip to main content link
- [ ] Test with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Test with browser zoom (200%, 400%)
- [ ] Verify all images have alt text (when added)
- [ ] Run axe DevTools accessibility scan
- [ ] Verify focus indicators are visible

#### Performance
- [ ] Run Lighthouse audit (target: 90+ performance)
- [ ] Check First Contentful Paint < 1.5s
- [ ] Check Largest Contentful Paint < 2.5s
- [ ] Check Cumulative Layout Shift < 0.1
- [ ] Test on slow 3G connection
- [ ] Verify images are optimized

#### SEO
- [ ] Run Lighthouse SEO audit (target: 100)
- [ ] Verify meta tags are correct
- [ ] Verify structured data is valid
- [ ] Test social media preview (Facebook, Twitter)
- [ ] Verify canonical URL is set
- [ ] Check robots.txt (if needed)
- [ ] Submit sitemap to Google Search Console

### 6. Build & Deploy

#### Build
- [ ] Run `npm run build` successfully
- [ ] Check build output for errors
- [ ] Verify bundle sizes are reasonable
- [ ] Test production build locally (`npm run preview`)

#### Environment
- [ ] Set up environment variables (if needed)
- [ ] Configure domain name
- [ ] Set up SSL certificate (HTTPS)
- [ ] Configure CDN (if using)

#### Deployment
- [ ] Choose hosting platform (Vercel/Netlify/etc)
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Deploy to production
- [ ] Verify deployment successful
- [ ] Test live site thoroughly

### 7. Post-Launch

#### Monitoring
- [ ] Set up Google Analytics (if desired)
- [ ] Set up error tracking (Sentry, etc)
- [ ] Monitor Core Web Vitals
- [ ] Set up uptime monitoring

#### Marketing
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Share on social media
- [ ] Update business listings

#### Maintenance
- [ ] Document any custom changes
- [ ] Set up automated backups
- [ ] Plan content update schedule
- [ ] Monitor and respond to user feedback

## Quick Fixes

### If Build Fails
```bash
rm -rf node_modules dist
npm install
npm run build
```

### If Styles Don't Apply
```bash
# Clear Tailwind cache
rm -rf .cache
npm run dev
```

### If TypeScript Errors
```bash
# Reinstall types
npm install --save-dev @types/react @types/react-dom
```

## Launch Day Commands

```bash
# Final build
npm run build

# Test production build locally
npm run preview

# Deploy (if using Vercel CLI)
vercel --prod

# Or push to main branch for auto-deploy
git add .
git commit -m "Ready for production"
git push origin main
```

## Success Criteria

✅ All content is customized and accurate
✅ All images are added and optimized
✅ All links work correctly
✅ Site is responsive on all devices
✅ Lighthouse scores: 90+ performance, 100 accessibility
✅ No console errors
✅ Site loads in < 3 seconds
✅ All accessibility tests pass
✅ SEO meta tags are correct
✅ Site is deployed and live

## Support Resources

- **Setup Issues**: See `SETUP.md`
- **Customization**: See `IMPLEMENTATION_SUMMARY.md`
- **Accessibility**: See `ACCESSIBILITY.md`
- **Quick Start**: See `QUICKSTART.md`

---

**Ready to launch?** Follow this checklist step by step, and you'll have a production-ready website! 🚀
