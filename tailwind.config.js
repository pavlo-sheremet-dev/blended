/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        darkMy: "#1d1a39",
        purpleMy: "#451952",
        purplePaleMy: "#662549",
        pinkMy: "#ae445a",
        orangeMy: "#f39f5a",
        whiteMy: "#e8bcb9",
      },
    },
  },
};
