/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'desert-sand': '#E3CDBF',
        'golden-hour': '#E3AB00',
        'clay-blossom': '#BF786C',
        'spiced-earth': '#590D00',
        'mossy-grove': '#4A4003',
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
