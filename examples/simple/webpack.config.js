const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },

  entry: './src/index.js',

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.nim$/,
        loader: path.resolve(__dirname, '../../nim-loader/dist/loader.js')
      }
    ]
  }
}