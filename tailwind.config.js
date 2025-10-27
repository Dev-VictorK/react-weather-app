/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      colors: {
        blackNight: "#212529",
        lightDay: "#FCFCFC",
        cardDark: "#343A40",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

