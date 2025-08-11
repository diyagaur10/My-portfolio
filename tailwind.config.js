/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a2e",                       // dark background
        secondary: "#FA8072",                     // main salmon/orange highlight
        textPrimary: "#FFE5B4",                   // light peach text
        textSecondary: "#FDD7AA",                 // soft orange/gold for secondary text
        accent: "#2c2c54",                        // dark accent
        hoverSecondary: "#E57365",                // darker salmon for hover
        hoverPrimary: "#292d33",
        divider: "rgba(255, 182, 193, 0.15)", // soft pink divider
        icons: "#FA8072",
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
