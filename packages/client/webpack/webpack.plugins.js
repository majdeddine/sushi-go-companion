import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import CompressionPlugin from 'compression-webpack-plugin'
import nodePackage from '../package.json'

require('dotenv').config()

const { NODE_ENV, JWT_NAME } = process.env

const isDev = NODE_ENV === 'development'

export const env = new webpack.DefinePlugin({
  process: {
    env: {
      APP_NAME: JSON.stringify('Sushi Go!'),
      APP_Version: JSON.stringify(nodePackage.version),
      NODE_ENV: JSON.stringify(NODE_ENV),
      JWT_NAME: JSON.stringify(JWT_NAME),
    },
  },
})

export const html = new HtmlWebpackPlugin({
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

export const hot = new webpack.HotModuleReplacementPlugin()

export const clean = new CleanWebpackPlugin()

export const analyzer = new BundleAnalyzerPlugin({
  analyzerMode: 'static',
  openAnalyzer: false,
})

export const compression = new CompressionPlugin({
  filename: '[path].gz[query]',
  algorithm: 'gzip',
})
