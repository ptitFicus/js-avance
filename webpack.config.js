const path = require('path');
const webpack = require('webpack');

const config = {
  context: __dirname + '/src',
  entry: {
    app: './app.js',
    inventory: './inventory.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    publicPath: '/assets'
  },
  devServer: {
    contentBase: __dirname + '/src'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  config.devtool = 'source-map';
}

module.exports = config;