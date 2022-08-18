/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    fontFamily: {
      "condensed": "'Fira Sans Condensed', sans-serif",
      "puff": "DynaPuff, cursive"
    },
    extend: {
      colors: {
        "custom-black": "#222831",
        "custom-gray": "#393E46",
        "custom-teal": "#00ADB5",
        "custom-space": "#EEEEEE",
      }

    },
  },
  plugins: [],
}