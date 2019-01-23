const path = require('path');

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function(config, env) {
    // ...add your webpack config customisation, rewires, etc...
    config.module.rules[1].oneOf[2].include = [path.resolve(__dirname, 'src')];
    return config;
  },
  // The Jest config to use when running your jest tests - note that the normal rewires do not
  // work here.
  jest: function(config) {
    // ...add your jest config customisation...
    return config;
  },
};
