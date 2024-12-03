/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        primary: {
          light: "#10936A",
          dark: "",
        },
        background: {
          light: "#F1F5F9",
          dark: "#0f172a",
        },
        text: {
          light: "#171717",
          dark: "#E5E7EB",
        },
        card: {
          light: "#ffffff",
          dark: "#0f172a",
        },
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },

  plugins: [],
};
