const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = {
  name: 'client',
  target: 'web',
  devtool: 'inline-source-map',
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
    'react-hot-loader/patch',
    path.resolve(__dirname, '../client/index.js')
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '../buildClient'),
    publicPath: '/static/'
  },
  cache: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: ExtractCssChunks.loader,
            options: {
              hot: true, // if you want HMR
              reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              // localIdentName: '[name]__[local]--[hash:base64:5]',
            }
          }
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.css'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new WriteFilePlugin(),
    new ExtractCssChunks(),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        __isBrowser__: true
      }
    })
  ]
};