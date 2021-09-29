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
      primary: colors.blue[600],
      secondary: colors.blue[400],
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      orange: colors.orange,
    },
    extend: {
      backgroundImage: () => ({
        'track': 'url(\'./public/assets/images/track.webp\')',
        'track-md': 'url(\'./public/assets/images/track-md.webp\')',
        'track-lg': 'url(\'./public/assets/images/track-lg.webp\')',
        'track-xl': 'url(\'./public/assets/images/track-xl.webp\')',
        'track-2xl': 'url(\'./public/assets/images/track-xl.webp\')',
        'agile': 'url(\'./public/assets/images/agile.svg\')',
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