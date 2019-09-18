const path = require('path');
const webpack = require('webpack');
// const ServiceWorkerPlugin = require('serviceworker-webpack-plugin');

const res = p => path.resolve(__dirname, p);

const entry = res('../server/render.js');
const output = res('../buildServer');

module.exports = {
  mode: 'production',
  name: 'server',
  target: 'node',
  devtool: 'source-map',
  entry: [entry],
  output: {
    path: output,
    filename: 'main.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
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
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.css'],
  },
  optimization: {
    splitChunks: {
      minChunks: 1,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        __isBrowser__: false,
        __Server__: JSON.stringify(true),
      }
    }),
    // new ServiceWorkerPlugin({
    //   entry: path.join(__dirname, '..', 'src/sw.js'),
    //   excludes: ['*hot-update*', '**/*.map', '**/stats.json']
    // }),
    new webpack.HashedModuleIdsPlugin()
  ]
};