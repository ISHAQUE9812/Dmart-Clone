/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dmartGreen: "#0B6F3A",
        dmartRed: "#EE4224",
      }
    },
  },
  plugins: [],
}

