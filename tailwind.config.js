/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
        },
      },

      fontFamily: {
        sans: ["Raleway"],
      },
    },
  },

  plugins: [],
};
