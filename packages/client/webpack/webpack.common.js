import path from 'path'
import ALIASES from './webpack.aliases'

const { NODE_ENV, PORT } = process.env

const isDev = NODE_ENV === 'development'

export default {
  mode: NODE_ENV,
  target: 'web',
  entry: [path.resolve(ALIASES.src, 'index.js')],
  output: {
    path: path.resolve(ALIASES.dist),
    filename: 'assets/js/[name].[hash:8].js',
    publicPath: '/',
  },
  devtool: isDev ? 'eval-source-map' : '',
  devServer: {
    historyApiFallback: true,
    overlay: true,
    open: false,
    stats: 'errors-only',
    port: PORT || 8080,
    hot: true,
    host: '0.0.0.0',
  },
  stats: 'errors-only',
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      ...ALIASES,
    },
    mainFields: ['browser', 'main', 'module'],
  },
}
