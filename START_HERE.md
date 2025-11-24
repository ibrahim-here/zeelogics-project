# 🚀 Quick Start Guide

## ✅ Setup Complete!

All dependencies are installed. You're ready to run the website!

## 📍 Important: Always Run Commands from the Correct Directory

**You MUST be in the `zeelogics-website` folder to run npm commands!**

### Check Your Current Directory

In PowerShell, you should see:
```
PS E:\...\zeelogics-website>
```

If you see:
```
PS E:\...\zee-logics-code-2.0>
```

Then you need to navigate to the project folder first:

```bash
cd zeelogics-website
```

## 🎯 Start the Development Server

Once you're in the `zeelogics-website` directory:

```bash
npm run dev
```

The website will open at: `http://localhost:5173`

## 🎨 What's New

- ✅ Neon color changed to #e7ff00 (yellow-green)
- ✅ LightRays animated background in Hero section
- ✅ Glassmorphism design (frosted glass effect)
- ✅ Rounded pill buttons
- ✅ All dependencies installed

## 🐛 Troubleshooting

### Error: "Cannot find package.json"
**Solution:** You're in the wrong directory!
```bash
cd zeelogics-website
```

### Error: "Cannot find module 'ogl'"
**Solution:** The package is now installed! Just restart the dev server:
```bash
npm run dev
```

### Dev Server Not Starting
**Solution:** 
1. Stop the server (Ctrl+C)
2. Clear cache and restart:
```bash
Remove-Item -Recurse -Force node_modules\.vite
npm run dev
```

## 📝 Common Commands

All commands must be run from the `zeelogics-website` directory:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new packages
npm install

# Check for issues
npm run lint
```

## 🎉 You're All Set!

Just run `npm run dev` from the `zeelogics-website` folder and enjoy your new website with the animated light rays background!
