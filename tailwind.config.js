/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/**/*.{js,ts,jsx,tsx}",
    "./src/pages/*.tsx",
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
        comicDesktop: "270px 1fr",
        catalog: "1fr auto",
      },
      gridTemplateRows: {
        navbar: "100px",
        comicDesktop: "40px auto 80px 1fr",
        layout: "auto 1fr auto",
        catalog: "300px 1fr",
      },
      backgroundImage: {
        register: "url('/bg-blur.jpg')",
        login: "url('/bg-wave.svg')",
      },
      colors: {
        indigoGrey: "#6c8480",
        indigoLight: "#8caba6",
        lightGrey: "#d4dcda",
        customWhite: "#f4f4f4",
      },
      keyframes: {
        blink: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        blink: "blink 1s infinite",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
