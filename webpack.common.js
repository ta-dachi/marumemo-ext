const webpack = require("webpack");
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const srcDir = './src/';

module.exports = {
  entry: {
    background: path.join(__dirname, srcDir + 'background.ts'),
    "page-eater": path.join(__dirname, srcDir + 'page-eater.ts'),
    "save-page": path.join(__dirname, srcDir + 'save-page.ts')
  },
  output: {
    path: path.join(__dirname, './modify-page/'),
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: "initial"
    }
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    // exclude locale files in moment
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CopyPlugin([{
      from: "manifest.json",
      to: './'
    }, {
      from: "./src/popup.html",
      to: "./"
    }], {
      context: './'
    }),
  ]
};