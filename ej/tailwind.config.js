module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#161b25',
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
