/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      scale: {
        '-100': '-1',
      },
      spacing: {
        "big": "48rem",
        "small-10": "10%",
        "large-90": "90%",
      }
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  
  },
  plugins: [],
}

