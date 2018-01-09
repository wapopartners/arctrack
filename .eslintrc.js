module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'airbnb-base',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-console': 0,
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 0,
    'func-names': 0,
    'prefer-arrow-callback': 0,
    'consistent-return': 0,
    "object-curly-newline": [
      "error", 
      { 
        "minProperties": 3,
        "multiline": true,
      }
    ]
  },
};