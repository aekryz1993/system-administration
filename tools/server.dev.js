const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');
// const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const res = p => path.resolve(__dirname, p);

const nodeModules = res('../node_modules');
const entry = res('../server/render.js');
const output = res('../buildServer');

const externals = fs
  .readdirSync(nodeModules)
  .filter(x => !/\.bin|react-universal-component|webpack-flush-chunks/.test(x))
  .reduce((externals, mod) => {
    externals[mod] = `commonjs ${mod}`;
    return externals;
  }, {});

externals['react-dom/server'] = 'commonjs react-dom/server';

module.exports = {
  name: 'server',
  devtool: 'source-map',
  target: 'node',
  mode: 'development',
  entry: [entry],
  // externals: nodeExternals(),
  externals,
  output: {
    path: output,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              // localIdentName: '[name]__[local]--[hash:base64:5]',
              onlyLocals: true,
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      minChunks: 1,
    }
  },
  resolve: {
    extensions: ['.js', '.css'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new WriteFilePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        __isBrowser__: false,
        __Server__: JSON.stringify(true),
      }
    })
  ]
};