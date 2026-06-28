// module.exports = function (api) {
//   api.cache(true);
//   let plugins = [];

//   plugins.push('react-native-worklets/plugin');

//   return {
//     presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],

//     plugins,
//   };
// };


// module.exports = function (api) {
//   api.cache(true);

//   return {
//     presets: [
//       ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
//       'nativewind/babel',
//     ],
//     plugins: [
//       'react-native-worklets/plugin',
//       'react-native-reanimated/plugin',
//     ],
//   };
// };

//CQBP-NNPJ cline code

module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      'react-native-reanimated/plugin',
    ],
  };
};