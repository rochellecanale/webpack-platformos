const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  plugins: [
    new HTMLWebpackPlugin({
      title: 'POS Webpack',
      entry: 'index.js',
      output:{
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
      }
    }),
    new MomentLocalesPlugin()
  ]
}