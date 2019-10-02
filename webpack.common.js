const webpack = require("webpack");
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const srcDir = './src/';
const contentScriptsDir = '/contentScripts/';

module.exports = {
  entry: {
    background: "./src/background/background.ts",
    popup: "./src/popup.ts",
    testpop: "./src/testpop.ts",
    "content-script": "./src/contentScripts/content-script.ts",
    "send-message": "./src/contentScripts/send-message.ts",
    "page-eater": "./src/contentScripts/page-eater.ts",
    "save-page": "./src/contentScripts/save-page.ts"
    // browserActions: path.join(__dirname, srcDir + "browserActions/*")
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