const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mid: "1400px",
      ...defaultTheme.screens,
      xs: "520px",
    },
    extend: {
      fontFamily: {
        sans: ["Gilroy", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        greenRadial:
          "radial-gradient(50% 50% at 50% 50%, #33FDFF 0%, rgba(51, 253, 255, 0) 100%)",
        blueGr: "linear-gradient(180deg, #33FDFF -1.44%, #424CFF 99.66%)",
        btnGr:
          "linear-gradient(116.22deg, #7BCBE8 1.27%, #8715E6 49.07%, #33FDFF 103.24%)",
        blackGr:
          "linear-gradient(180deg, rgba(2, 2, 2, 0.8) 0%, rgba(4, 5, 6, 0.8) 100%)",
      },
      colors: {
        btnBg: "#14133B",
        purple: "#060610",
        pink: "#D54BD5",
      },
    },
  },
  plugins: [],
};
