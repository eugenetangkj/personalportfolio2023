/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
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
        "small-12.5": "12.5%",
        "small-30": "30%",
        "small-40": "40%",
        "large-90": "90%",
        "large-80": "80%",
        "large-70": "70%",
        "large-60": "60%",
        "large-50": "50%",
        "large-125": "125%",
      },
      animation: {
        blob: "blob 5s linear infinite",
        blobmedium: "blob 4.5s linear infinite",
        blobfast: "blob 4s linear infinite",
        blobfaster: "blob 3s linear infinite",

      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0, 100vh) scale(0)",
          },
          "20%": {
            transform: "translate(0, 80vh) scale(0.5)",
          },
          "40%": {
            transform: "translate(0, 60vh) scale(0.75)",
          },
          "60%": {
            transform: "translate(0, 40vh) scale(0.5)",
          },
          "80%": {
            transform: "translate(0, 20vh) scale(0.3)",
          },
          "100%": {
            transform: "translate(0, 0vh) scale(0.1)",
          }
        }
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  
  },
  plugins: [],
}

