var devConfig = require('./webpack.config.js');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var prodConfig = Object.assign({}, devConfig);

prodConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new CopyWebpackPlugin([{
    from: 'src/index.html'
  }])
);

module.exports = prodConfig;
