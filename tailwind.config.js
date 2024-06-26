/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./public/index.html"],
  theme: {
    extend: {
      height: {
        "about": "420px",
        "344": "344px",
        "20rem": "20rem",
        "card": "10rem",
        "554": "554px",
        "32rem": "32.3rem"
      },
      width: {
        "26rem": "26rem",
        "22rem": "22.9rem",
        "card": "42.3rem",
        "169": "169px",
        "704": "704px",
        "37.5rem": "37.5rem"
      },
      margin: {
        "add": "205px"
      },
      flex: {
        "1.5": "1.5 1.5 0"
      },
      keyframes: {
        down: {
          "0%": {top: "-100%"},
          "100%": {top: "-112px"}
        },
        down2: {
          "0%": {top: "-100%"},
          "100%": {top: "40px"}
        }
      },
      animation: {
        "uptodown": "down 1s .3s ease",
        "uptodown2": "down2 1s .3s ease"
      },
      boxShadow: {
        "bank": " 0 0 5px #7CBC91"
      }
    },
    colors: {
      tint_1: "#E5F2E9",
      tint_2: "#CAE4D3",
      tint_3: "#B0D7BD",
      tint_4: "#96C9A7",
      tint_5: "#7CBC91",
      tint_6: "#61AE7B",
      tint_7: "#4E9968",
      primary: "#417F56",
      shade_1: "#396F4B",
      shade_2: "#315F41",
      shade_3: "#294F36",
      shade_4: "#21402B",
      shade_5: "#183020",
      shade_6: "#102016",
      shade_7: "#08100B",
      white: "#FFFFFF",
      gray_1: "#F9F9F9",
      gray_2: "#E1E1E1",
      gray_3: "#EDEDED",
      gray_4: "#CBCBCB",
      gray_5: "#ADADAD",
      gray_6: "#757575",
      gray_7: "#717171",
      gray_8: "#353535",
      black: "#0C0C0C",
      error: "#C30000",
      error_light: "#ED2E2E",
      error_extralight: "#FFF2F2",
      success: "#00966D",
      success_light: "#00BA88",
      success_extralight: "#F3FDFA",
      warning: "#A9791C",
      warning_light: "#F4B740",
      warning_extralight: "#FFF8E1",
      transparent: "transparent",
    },
  },
  plugins: [],
};
