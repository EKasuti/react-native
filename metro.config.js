const { getDefaultConfig } = require('expo/metro-config');   // bare RN: require('@react-native/metro-config')

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// 👇  Roll back to the old behaviour so `require` is available
config.resolver.unstable_enablePackageExports = false;

module.exports = config;
