/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a2e",               // dark background
        secondary: "#ff69b4",             // baby pink highlight
        babyPink: "#ffc0cb",              // lighter pink
        textPrimary: "#ffc0cb",           // baby pink text
        textSecondary: "#ffb6c1",         // soft pink
        accent: "#2c2c54",                // dark accent
        hoverSecondary: "#ff87b7",        // brighter hover pink
        hoverPrimary: "#292d33",
        divider: "rgba(255, 182, 193, 0.15)", // soft pink divider
        icons: "#ff69b4",
        overlay: "rgba(255, 182, 193, 0.2)",  // pinkish overlay
      },
      screens: {
        xs: "420px",
        xl: "1170px",
      },
    },
  },
  plugins: [],
};
