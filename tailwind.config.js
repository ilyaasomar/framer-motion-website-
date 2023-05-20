/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4a00e0",
        // primary: 'gradient-to-r from-[#0575e6] to-[#4a00e0]',
        secondary: "#0575e6",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    fontFamily: {
      // raleway: ["Raleway", "sans-serif"],
      // roboto: ['Roboto', "sans-serif"],
      overpass: ["Overpass", "sans-serif"],
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
