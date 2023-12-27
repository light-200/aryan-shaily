/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        documentBg: "#d2d2d2",
        buttonBg: "#b4b4b4",
        buttonBorder: "#a09f9f",
        cardBg0: "#b4b4b4",
        inputBg: "#c6c6c6",
        cardBg1: "#cbcbcb",
      },
    },
  },
  plugins: [],
};
