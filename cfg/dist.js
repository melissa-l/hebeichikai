'use strict';

let path = require('path');
let webpack = require('webpack');
const md5 = require('md5');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

const hash = md5(Date.now());

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: {
    bundle: path.join(__dirname, '../src/index'),
    vendor: ['react', 'react-dom']
  },
  cache: false,
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      '_isServer_': false,
      '_isCLient': true,
    }),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash].js'),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.[hash].css')
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths,
    [path.join(__dirname, '/../src')]
  )
});

//remove  old files

module.exports = config;
