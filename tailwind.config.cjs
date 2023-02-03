/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      background: {
        bgDdestinationMobile:
          "url('./src/assets/destination/background-destination-mobile.jpg')",
      },
    },
  },
  plugins: [],
}
