const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./public/**/*.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
}) 
module.exports = {
  plugins: [
    require('postcss-import'),
    cssnano({
      preset: 'default',
    }),
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV == 'production'
    ? [purgecss, require('cssnane')]
    : []
  ]
}