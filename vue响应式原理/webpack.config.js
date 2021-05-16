const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    path: './src/index.js'
  },
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './www'),
    compress: false,
    port: 8080,
    publicPath: '/xuni/'
  }
}