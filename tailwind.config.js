/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',   // slower
        'spin-medium': 'spin 1.5s linear infinite', // medium
        'spin-fast': 'spin 0.5s linear infinite',  // faster
      },
      colors: {
        blackNight: "#212529",
        lightDay: "#FCFCFC",
        cardDark: "#343A40",
        smoothGray: "#ADB5BD",
        paleWhite:"#F8F9FA",
        dGreen: "#007F5F",
        tdGreen:"#70E000",
        lGreen:"#16DB65",
        tlGreen:"#004B23",
        dRed:"#8D0801",
        tdRed:"#FF002B",
        lRed:"#FF6161",
        tlRed:"#FF3C1E",
        ftGray:"#495057",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

