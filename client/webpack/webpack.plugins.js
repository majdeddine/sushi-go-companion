const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CompressionPlugin = require('compression-webpack-plugin')
const nodePackage = require('../package.json')

require('dotenv').config()

const { NODE_ENV, JWT_NAME } = process.env

const isDev = NODE_ENV === 'development'

const env = new webpack.DefinePlugin({
  process: {
    env: {
      APP_NAME: JSON.stringify('Sushi Go!'),
      APP_Version: JSON.stringify(nodePackage.version),
      NODE_ENV: JSON.stringify(NODE_ENV),
      JWT_NAME: JSON.stringify(JWT_NAME),
    },
  },
})

const html = new HtmlWebpackPlugin({
  title: 'Sushi Go!',
  filename: 'index.html',
  template: 'src/index.ejs',
  cache: !isDev,
  hash: !isDev,
  minify: !isDev,
  meta: {
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no',
  },
})

const hot = new webpack.HotModuleReplacementPlugin()

const clean = new CleanWebpackPlugin()

const analyzer = new BundleAnalyzerPlugin({
  analyzerMode: 'static',
  openAnalyzer: false,
})

const compression = new CompressionPlugin({
  filename: '[path].gz[query]',
  algorithm: 'gzip',
})

module.exports = {
  env,
  html,
  hot,
  clean,
  analyzer,
  compression,
}
