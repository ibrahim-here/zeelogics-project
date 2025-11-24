/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#000000',
        charcoal: '#1A1A1A',
        lighter: '#2F2F2F',
        neon: '#e7ff00', // Brand yellow-green color
        'text-primary': '#FFFFFF',
        'text-secondary': '#B3B3B3',
        'text-muted': '#666666',
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading-xl': ['5rem', { lineHeight: '1.1' }],
        'heading-lg': ['2.5rem', { lineHeight: '1.2' }],
        'heading-md': ['1.75rem', { lineHeight: '1.3' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.1em' }],
      },
    },
  },
  plugins: [],
}
