/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        blinker: ["Blinker", "sans-serif"],
        lato: ["lato", "sans-serif"],
        palanquin: ["Palanquin Dark", "sans-serif"],
      },
    },
  },
  plugins: [],
};
