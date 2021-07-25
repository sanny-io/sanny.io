const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      primary: colors.blue[600],
      secondary: colors.blue[400],
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      orange: colors.orange,
    },
    extend: {
      backgroundImage: () => ({
        track: 'url(\'./public/assets/images/track.jpg\')',
      }),
      transitionProperty: {
        width: 'width',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}