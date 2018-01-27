const babelOptions = { presets: ['env', 'stage-2'] };

module.exports = require('babel-jest').createTransformer(babelOptions);
