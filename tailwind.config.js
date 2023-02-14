/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(0deg)",
          },
          "75%": {
            transform: "rotate(3deg)",
          },
        },
        bigWiggleLeft: {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(-6deg)",
          },
          "50%": {
            transform: "rotate(0deg)",
          },
          "75%": {
            transform: "rotate(6deg)",
          },
        },
        bigWiggleRight: {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(-6deg)",
          },
          "50%": {
            transform: "rotate(0deg)",
          },
          "75%": {
            transform: "rotate(6deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s linear",
        bigWiggleLeft: "bigWiggleLeft 1s 2",
        bigWiggleRight: "bigWiggleLeft 1s 2",
      },
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
        "space-grotesk": ['"Space Grotesk"', "sans-serif"],
        ultra: ['"Ultra"', "sans-serif"],
      },
      backgroundImage: {
        ceremoney:
          "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/ceremoney_bg.webp')",
      },
    },
  },
  plugins: [require("daisyui")],
};
