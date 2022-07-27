/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'my-green': '#1B3D2F',
        'my-white': '#fcfffe',
        'my-almost-white': '#FFF8E1'
      },
      backgroundImage: {
        'bookshelf': "url('img/bookshelf.jpeg')",
      },
    },
  },
  plugins: [],
}
