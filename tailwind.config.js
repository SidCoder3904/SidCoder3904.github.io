/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      palette4: "#0a1828",    // Dark classic blue
      palette3: "#178582",    // turquoise
      palette2: "#bfa181",    // gold
      palette1: "#ffffff",    // white
      // palette5: "#000028",   
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

