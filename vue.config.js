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
    host: 'localhost',
    port: 1111, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: false,
  },
};