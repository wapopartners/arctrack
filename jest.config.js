module.exports = {
  // when verbose is set to true, console.log statements in __tests__ don't work!
  verbose: true,
  transform: { '^.+\\.js$': '<rootDir>/jestPreprocess.js' },
};
