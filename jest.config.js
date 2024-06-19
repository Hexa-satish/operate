module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jestSetupFile.js'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-navigation|react-redux|@react-native|@react-navigation|redux-persist)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
