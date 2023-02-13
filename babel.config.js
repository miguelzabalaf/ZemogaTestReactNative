module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    '@babel/plugin-proposal-export-namespace-from',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./'],
        extensions: ['.ts', '.tsx', '.js'],
      },
    ],
  ],
};
