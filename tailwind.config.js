/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "*.html",
  ],
  theme: {
      screens: {
        "xs": "320px",
        "sm": "375px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1440px",
        "3xl": "1644px",
      },
    extend: {
      fontFamily: {
        "jost": ["jost", "sans"],
        "open-sans": ["open-sans", "sans"]
      },
      colors: {
        "prime-black": "#303030",
        "prime-secondary-black": "#4E4E4E",
        "border-color": "#DEDEDE",
        "prime-grey": "#7D7D7D",
      },
      
    },
  },
  plugins: [],
}

