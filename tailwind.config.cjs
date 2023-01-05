const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mid: "1400px",
      head: "1215px",
      ...defaultTheme.screens,
      xs: "520px",
    },
    extend: {
      fontFamily: {
        sans: ["Gilroy", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        hoverShadow: "0px 0px 20px #7BCBE8",
      },
      backgroundImage: {
        tableBorder:
          "linear-gradient(270deg, rgba(255, 255, 255, 0) 0.12%, rgba(255, 255, 255, 0) 0.13%, #E04ADC 47.6%, rgba(255, 254, 254, 0) 101.4%)",
        headerScroll:
          "linear-gradient(183.33deg, #000000 2.75%, rgba(0, 0, 0, 0) 97.54%)",
        blueRadial:
          "radial-gradient(51.45% 101.64% at 52.54% 51.68%, #7BCBE8 0%, #8715E6 46.88%, #33FDFF 100%)",
        greenRadial:
          "radial-gradient(50% 50% at 50% 50%, #33FDFF 0%, rgba(51, 253, 255, 0) 100%)",
        blueGr: "linear-gradient(180deg, #33FDFF -1.44%, #424CFF 99.66%)",
        btnGr:
          "linear-gradient(116.22deg, #7BCBE8 1.27%, #8715E6 49.07%, #33FDFF 103.24%)",
        blackGr:
          "linear-gradient(180deg, rgba(2, 2, 2, 0.8) 0%, rgba(4, 5, 6, 0.8) 100%)",
        hoverSol:
          "linear-gradient(116.22deg, #7BCBE8 1.27%, #8715E6 49.07%, #33FDFF 103.24%)",
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
