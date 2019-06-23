const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: ['react-hot-loader/webpack', 'babel-loader'],
}

const image = {
  test: /\.(jpe?g|gif|png|svg)($|\?)/i,
  exclude: /node_modules/,
  loader: 'url-loader',
  options: {
    limit: 1000,
    name: 'images/[hash].[ext]',
  },
}

const font = {
  test: /\.(woff|woff2|eot|ttf)$/,
  loader: 'url-loader?name=fonts/[hash:24].[ext]',
  exclude: /node_modules/,
}

module.exports = { js, image, font }
