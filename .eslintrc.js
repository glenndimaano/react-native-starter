// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  ignorePatterns: ['/dist/*'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        semi: true,
        singleQuote: true
      }
    ],
    'prefer-arrow-callback': ['error'],
    'prefer-template': ['error']
  }
};
