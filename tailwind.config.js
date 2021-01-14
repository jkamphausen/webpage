module.exports = {
  // purge: [],
  purge: ['./pages/**/*.js', './components/**/*.js'], // purge unused styles in production
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
