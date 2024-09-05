/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs':'450px'
      },
      fontFamily: {
        blinker: ["Blinker", "sans-serif"],
        lato: ["lato", "sans-serif"],
        palanquin: ["Palanquin Dark", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        redhat: ["Red Hat Text", "sans-serif"],
        yeseva: ["Yeseva One", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        fira: ["Fira Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
