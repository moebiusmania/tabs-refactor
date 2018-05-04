'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'tabs.js',
  },
  mode: env,
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/assets/index.html'
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    watchOptions: {
      poll: true
    },
    compress: true,
    port: 8081,
    host: 'localhost',
    hot: true,
    inline: true
  }
}