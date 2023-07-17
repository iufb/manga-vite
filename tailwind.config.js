/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/**/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{tsx}",
  ],
  theme: {
    screens: {
      mobile: "350px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },

    extend: {
      gridTemplateColumns: {
        navbar: "100px 1fr 100px",
        userHeader: "52px 1fr 200px",
      },
      gridTemplateRows: {
        navbar: "100px",
      },
      backgroundImage: {
        register: "url('./src/assets/bg-blur.jpg')",
        login: "url('./src/assets/bg-wave.svg')",
      },
      colors: {
        indigoGrey: "#6c8480",
        indigoLight: "#8caba6",
        lightGrey: "#d4dcda",
        customWhite: "#f4f4f4",
      },
    },
  },
  plugins: [require("daisyui")],
};