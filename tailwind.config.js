const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':'470px',
        ...defaultTheme.screens,
      },
      colors: {
        'lightColor':'#FFFFFF',
        'activeColor':'#C4B8A5',
        'primaryColor':'#333333',
      },
      backgroundImage: {
        'designSystem' : "url('/Images/background.jpg')",
        'svgBg': "url('/svgImage/cart-bg.svg)"
      }
    },
  },
  plugins: [],
}
