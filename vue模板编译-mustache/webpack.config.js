// const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './www',
    compress: false,
    port: 8080,
    publicPath: '/xuni/'
  }
}