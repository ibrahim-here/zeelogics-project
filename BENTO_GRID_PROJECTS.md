# Bento Grid Projects Section

## ✅ Implementation Complete

### Design Features

1. **Hero Section Height**
   - Changed from `min-h-screen` to `h-[75vh]`
   - Hero now takes 75% of viewport height
   - Projects section starts overlapping at the bottom

2. **Projects Section**
   - **No heading** - projects start directly
   - **Negative margin** (`-mt-32`) to overlap with hero
   - **Bento grid layout** with 4 rows

3. **Grid Layout (4 rows, 2 projects each)**
   - **Row 1**: 60% width | 40% width
   - **Row 2**: 35% width | 65% width
   - **Row 3**: 65% width | 35% width
   - **Row 4**: 40% width | 60% width

4. **Varying Heights**
   - Projects have different heights: `h-64`, `h-72`, `h-80`
   - Creates an unpredictable, cool grid effect

5. **Card Design (Glassmorphism)**
   - **Image**: Full cover with `object-cover`
   - **Gradient overlay**: Dark gradient from bottom
   - **Glass card**: Backdrop blur with white/5 background
   - **Border**: White/10 with neon glow on hover
   - **Category badge**: Neon-colored pill
   - **Hover effects**:
     - Image scales to 110%
     - Card background brightens
     - Border glows neon
     - Title changes to neon color
     - Arrow moves right

6. **Animations**
   - Fade in + slide up on scroll
   - Staggered animation (0.1s delay between cards)
   - Smooth transitions on hover

## Project Card Structure

```tsx
<div className="relative h-[height] rounded-3xl overflow-hidden">
  {/* Image with gradient overlay */}
  <img className="object-cover" />
  <div className="gradient-overlay" />
  
  {/* Glassmorphism content card */}
  <div className="backdrop-blur-md bg-white/5 border border-white/10">
    <span className="category-badge">Category</span>
    <h3>Project Title</h3>
    <div>View Project →</div>
  </div>
</div>
```

## Placeholder Image

Using: `https://tse1.mm.bing.net/th/id/OIP.Wg-yX69C1rFNYrve7rfARQHaE8?pid=Api&P=0&h=220`

## Responsive Behavior

- **Mobile**: Single column, full width
- **Desktop**: Bento grid with varying widths

## User Experience

1. User lands on hero (75vh)
2. Scrolls down and sees projects starting to appear
3. Projects overlap hero section creating seamless transition
4. Bento grid creates visual interest with varying sizes
5. Hover reveals more details with smooth animations

## Total Projects

8 projects (expandable to any number)

## Next Steps

To customize:
1. Replace placeholder images in `constants/content.ts`
2. Update project titles and categories
3. Adjust heights in Projects.tsx if needed
4. Modify width percentages for different layouts
