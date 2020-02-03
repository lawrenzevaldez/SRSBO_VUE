const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]
  },
  devServer: {
    host: '192.168.107.100',
    port: 1111, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: false,
  },
};