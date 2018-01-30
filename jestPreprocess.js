const babelOptions = {
  presets: ['env', 'stage-2'],
  plugins: ['transform-decorators-legacy'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
