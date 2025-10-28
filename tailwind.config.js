/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackNight: "#212529",
        lightDay: "#FCFCFC",
        cardDark: "#343A40",
        smoothGray: "#ADB5BD",
        paleWhite:"#F8F9FA",
        dGreen: "#007F5F",
        tdGreen:"#70E000",
        dRed:"#8D0801",
        tdRed:"#FF002B",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

