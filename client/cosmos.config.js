const path = require('path');

module.exports = {
  globalImports: ['@babel/polyfill', './resources/styles/style.css'],
  fileMatch: [path.resolve(__dirname, 'lib/**/*.fixtures.js')],
  webpack: (config, { env }) =>
    // Return customized config
    ({
      ...config,
      module: {
        rules: [
          ...config.module.rules,
          {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=1000&name=fonts/[hash:24].[ext]',
            exclude: /node_modules/,
          },
        ],
      },
    }),
};
