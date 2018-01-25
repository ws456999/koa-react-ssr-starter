const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
]

module.exports = (ctx) => ({
  plugins: [
    require('postcss-import')({ addDependencyTo: ctx }),
    require('postcss-simple-vars')({}),
    require('postcss-nested')(),
    require('postcss-mixins')(),
    require('postcss-flexbugs-fixes')(),
    require('autoprefixer')({
      browsers: AUTOPREFIXER_BROWSERS,
      flexbox: 'no-2009',
    }),
  ]
})
