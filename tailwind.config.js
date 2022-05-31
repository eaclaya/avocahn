module.exports = {
  content: [
    './assets/*.liquid',
    './snippets/*.liquid',
    './sections/*.liquid',
    './layout/*.liquid',
    './templates/*.liquid',
    './assets/*.json',
    './config/*.json',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        roboto: ['Roboto', 'serif'],
        domine: ['Domine', 'serif'],
        cambay: ['Cambay', 'serif'],
      }
    },
  },
  plugins: [],
}
