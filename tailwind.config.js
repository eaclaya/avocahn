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
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
      roboto: ['Roboto', 'serif'],
      domine: ['Domine', 'serif'],
      cambay: ['Cambay', 'serif'],
    },
    colors: {
      'brand-yellow': '#D8BE8C',
      'brand-gray': '#F3F3F3',
      'brand-green': '#4CA36F',
      'brand-dark': '#393939',
      'brand-white': '#FFFFFF'
    }
  },
  plugins: [],
}
