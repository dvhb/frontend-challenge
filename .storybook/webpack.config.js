const path = require('path');
const include = [path.resolve(__dirname, '../src')];

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.ts(x?)$/,
    use: [
      {
        loader: 'ts-loader',
        options: { transpileOnly: true },
      },
    ],
    include,
  });
  config.resolve.extensions = ['.ts', '.tsx', '.js'];
  return config;
};
