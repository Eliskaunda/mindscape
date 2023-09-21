/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Mooli, sans-serif",
    },

    extend: {
      colors: {
        orange: "#f28e1e",
        blue: "#152a4f",
        grey: "#e9eef7",
        lightBlue: "#63aaa9",
        black: "#383634",
      },
    },
  },
  plugins: [],
};
