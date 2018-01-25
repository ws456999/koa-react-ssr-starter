var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: './client/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public')
  },
  module: {
    loaders: [
      {test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: [path.join(__dirname)]
      }
    ]
  }
}
