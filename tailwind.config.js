module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      white:'#fff',
      black:'#000',
      primary:'#FF0068',
      gray:"#6B7280",
      green:'#059669',
      gray_lite:'#E5E7EB'
    },
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
