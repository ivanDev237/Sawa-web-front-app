/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        primary: {
          light: "#0F8156",
          dark: "#0D6745",
          hoverElementsLight: "#E6F5EF",
        },
        background: {
          light: "#F3F4F6",
          dark: "#1A1A1A",
        },
        text: {
          light: "#000000",
          dark: "#E5E7EB",
        },
        card: {
          light: "#FFFFFF",
          dark: "#252525",
        },
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },

  plugins: [],
};
