const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './public/**/*.html',
    './src/**/*.js',
  ],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        ...process.env.NODE_ENV === 'production'
          ? [
              purgecss,
              require('cssnano')({
                preset: 'default',
              })
            ]
          : [],
      ]
    }
  }
}