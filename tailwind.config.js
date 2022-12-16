/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        'up': 'cubic-bezier(0.645, 0.045, 0.355, 1)'
      },
      colors: {
        lightOrange: '#F1B24A',
        darkOrange: '#ff8c00',
        slate: '#ccd6f6',
        darkslate: '#495670',
        lightestnavy: '#233554',
        lightnavy: '#112240',
        lightslate: '#a8b2d1',
        maroon: '#301008'
      }
    },
  },
  plugins: [],
}
