const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports =  {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      './src/index.js'
    ]
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
  },

  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 3000
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      loaders: [
        'style',
        'css',
        'sass'
      ]
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: './node_modules/openlayers/dist/ol.js'
    }, {
      from: './node_modules/openlayers/dist/ol.css'
    }
    ])
  ]
};
