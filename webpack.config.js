const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'dev';

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: '[name].js',
  },
  devtool: isDev ? 'inline-source-map' : false,
  resolve: { 
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        loader: 'eslint-loader',
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        options: {
          configFile: '.eslintrc.js',
        },
      }, 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-decorators-legacy'],
          },
        },
      },
    ],
  },
};