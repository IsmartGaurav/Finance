/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "clash" : ['Clash Display','sans-serif']

      },
      colors:{
        'Rasmalai' : '#FF5555'
      }
    },
  },
  plugins: [],
}
