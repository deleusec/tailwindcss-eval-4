/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "heebo" : ["Heebo", "sans-serif"],
      },
      minHeight: {
        "header-mobile" : "100px",
        "body-mobile" : "calc(100vh - 100px)",
      },
      maxWidth: {
        "body" : "1200px",
      },
      colors : {
        "primary" : {
          "500" : "#fff089",
        },
        "secondary" : {
          "500" : "#eaeafa",
        },
        "background-light" : "#f7f7f7",
        "background-dark" : "#1a1a1a",
      },
      backgroundImage: {
        "woman" : "url('./src/assets/woman_drinking.png')",
      },
    },
  },
  plugins: [],
  darkMode : "class",
}
