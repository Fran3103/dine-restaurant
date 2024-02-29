/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors:{
            'Beaver': '#9e7f66',
            'Cod-Gray': '#111111',

            'Mirage': '#17192b',
            'Ebony-Clay': '#242b37',
            'Shuttle Gray': '#5c6779 ',
            'white': '#ffffff'

        },
       
        backgroundImage:{
            'mobile': "url('/src/assets/images/homepage/hero-bg-mobile.webp')",
            'tablet': "url('/src/assets/images/homepage/hero-bg-tablet.webp')",
            'desktop': "url('/src/assets/images/homepage/hero-bg-desktop.webp')",
        },
      extend: {},
    },
    plugins: [],
  }