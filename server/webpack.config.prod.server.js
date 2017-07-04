/**
 * Created by qoder on 16/10/18.
 */
'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  // The configuration for the server-side rendering
  name: "server-side rendering",
  context: path.join(__dirname, "../"),
  target: "node",
  entry: {
    server: ['babel-polyfill', './src/server']
  },
  output: {
    path: './dist',
    filename: "server.js",
    publicPath: "/",
    libraryTarget: "commonjs2"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      __DEVCLIENT__: false,
      __DEVSERVER__: false,
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.IgnorePlugin(/vertx/),
  ],
  module: {
    preLoaders: [
      {test: /\.js$|\.jsx$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel',
        query: {
          "presets": ["es2015", "react", "stage-0"],
          "plugins": ["transform-decorators-legacy", "syntax-async-functions"]
        },
        include: path.join(__dirname, '..', 'src'),
        exclude: /node_modules/,
      },
      // {test: /\.json$/, loader: "json-loader"},
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'url?limit=10000&name=images/[hash:8].[name].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      }
    ]
  },
  eslint: {
    configFile: path.join(__dirname, '../.eslintrc.json')
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: [
      "src", "node_modules"
    ]
  }
};
