const path = require('path');
console.log('----------------------', path.resolve('./'));
module.exports = {
  presets: ['module:metro-react-native-babel-preset'], // existing
  // add the following line
  plugins: [
    'react-native-reanimated/plugin',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        alias: {
          '@src': './src',
        },
      },
    ],
  ],
};
