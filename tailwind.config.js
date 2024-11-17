const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_Green: "#0F8156",
        div_BgColors: "#F3F4F6",
        blue_BgTheme: "#203B6E",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        polymer_img: url("./src/Assets/imgs/polygonImg.png"),
      },
    },
  },
  plugins: [],
};
