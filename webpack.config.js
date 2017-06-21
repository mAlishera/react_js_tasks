/* eslint-disable*/
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.join(process.cwd(), 'src'),
      'node_modules'
    ]
  },

  plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  };
