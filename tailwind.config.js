/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      palette4: "#0a1828",    // Dark classic blue
      palette3: "#21b4b0",    // turquoise
      palette2: "#bfa181",    // gold
      palette1: "#d8d7ff",    // white
      white: "#ffffff",    // white
      black: "#000000",
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        'Raleway': ['"Raleway"', "sans-serif"],
      },
    },
  },
  plugins: [
    require('@codaworks/react-glow/tailwind'),
  ],
}

