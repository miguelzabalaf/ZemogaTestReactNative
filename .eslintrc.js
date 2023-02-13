module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['react-hooks'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react-hooks/rules-of-hooks': 'off', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'off', // Checks effect
      },
    },
  ],
};
