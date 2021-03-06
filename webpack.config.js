const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const generatePlugins = function (env) {
  const plugins = [];
  if (env.production) {
    plugins.push(new UglifyJsPlugin({
      sourceMap: true,
    }));
  }
  return plugins;
};

module.exports = env => ({
  entry: {
    main: './src/index.js',
    'track-dom-click-demo': './demo/code/track-dom/click/index.js',
    'track-dom-scroll-demo': './demo/code/track-dom/scroll/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
  },
  devtool: env.development ? 'inline-source-map' : false,
  resolve: { extensions: ['.js', '.json'] },
  module: {
    rules: [
      {
        loader: 'eslint-loader',
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        options: { configFile: '.eslintrc.js' },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-2'],
            plugins: ['transform-decorators-legacy'],
          },
        },
      },
    ],
  },
  plugins: generatePlugins(env),
});
