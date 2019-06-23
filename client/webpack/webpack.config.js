const common = require('./webpack.common')
const { env, html, hot, clean, analyzer, compression } = require('./webpack.plugins')
const { js, image, font } = require('./webpack.loaders')
const { optimization } = require('./webpack.optimization')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  ...common,
  module: {
    rules: [js, image, font],
  },
  plugins: [env, html, clean],
}

if (isDev) {
  config.plugins = [...config.plugins, hot]
} else {
  config.plugins = [...config.plugins, analyzer, compression]
  config.optimization = optimization
}

module.exports = config
