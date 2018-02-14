const babelOptions = {
  presets: ['env'],
  plugins: ['babel-plugin-root-import'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
