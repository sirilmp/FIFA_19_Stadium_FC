module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      white:'#fff',
      black:'#000',
      primary:'#FF0068'
    },
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
