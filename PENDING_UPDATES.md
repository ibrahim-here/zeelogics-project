# Pending Website Updates

## Summary of Requested Changes

### 1. Projects Section - Complete Overhaul
- [ ] Use real project images from `assets/projects/` folder
- [ ] Implement 5 projects with specific details:
  1. **Alfa Verputzer** (Construction/Painting) - 2025
     - Desktop: `project-alfa.PNG`
     - Mobile (on hover): `alfa-verputzer-mobile.png`
     - URL: https://www.alfa-verputzer-maler.de/
  
  2. **Lucky Cruz** (Golf Profile & Donations) - 2025
     - Image: `lucky.png`
     - URL: https://luckycruz.org/
  
  3. **Cherish Life Care Services** (NDIS/Healthcare) - 2025
     - Image: `ndis.png`
     - URL: https://cherishlifecs.com.au/
  
  4. **Shorrosh Foundation** (Non-profit) - 2025
     - Image: `shorrosh.png`
     - URL: https://shorrosh-foundation-latest-1.vercel.app/
  
  5. **Texas Crafts** - 2025
     - Image: `texas-crafts.png`

- [ ] Hover Effects:
  - Smooth transition to mobile view for Alfa project
  - Custom cursor: Neon circle with "View Live" text in center
  - All images use `object-fit: cover`
  - Increase card heights

### 2. Services Section Updates
- [ ] Update services list to include:
  - Web Design & Development
  - AI Automation
  - AI Agents
  - CRM and ERP
  - [One more similar service]
- [ ] Add looping video for Web Design card:
  - Video URL: `https://res.cloudinary.com/tone/video/upload/v1742466858/podium-mackbook.mockup-short_u7qpez.webm`

### 3. Testimonials Section
- [ ] Change to single carousel (not two rows)
- [ ] Remove company logos
- [ ] Show only: Review text + Person name
- [ ] Remove role/title

### 4. CTA Section (Clock Updates)
- [ ] Change eyebrow text from "Coffee or Sake?" to something more relevant
- [ ] Centralize clock needles
- [ ] Use neon brand color for ALL needles (not different colors)
- [ ] Use numbers (1-12) instead of letters for clock face

### 5. Global Changes
- [ ] Remove "Skip to main content" button from App.tsx
- [ ] Remove "Who We Are" (AboutUs) section temporarily
- [ ] Standardize padding (py-20) for all sections except Hero
- [ ] Add smooth scroll effect to entire website (already in index.css)

### 6. App.tsx Section Order
Current order should be:
1. Hero
2. Projects
3. ~~AboutUs~~ (REMOVE)
4. WhyChooseUs
5. Services
6. HowWeWork
7. Testimonials
8. FinalCTA

## Implementation Priority
1. Remove AboutUs section and skip-to-content link
2. Update Projects section with real images and hover effects
3. Update Services section with video
4. Simplify Testimonials
5. Update CTA clock design
6. Standardize section padding
