/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      minHeight: {
        "header-mobile" : "80px",
        "body-mobile" : "calc(100vh - 80px)",
      },
      colors : {
        "primary" : {
          "500" : "#fff089",
        },
        "secondary" : {
          "500" : "#eaeafa",
        },
        "background-light" : "#f7f7f7",
      }
    },
  },
  plugins: [],
}
