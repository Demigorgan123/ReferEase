/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        fadeInOut:{
          '0%, 100%': {opacity:0},
          '10%, 90%': {opacity:1},
        }
      },
      animation:{
        fadeInOut: 'fadeInOut 5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}