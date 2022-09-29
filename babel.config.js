const {createRequire} = require('module');

const rnRequire = createRequire(require.resolve('react-native'));

module.exports = {
  presets: [rnRequire.resolve('metro-react-native-babel-preset')],
};
