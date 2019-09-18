const path = require('path');
const webpack = require('webpack');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  name: 'client',
  target: 'web',
  devtool: 'source-map',
  entry: [path.resolve(__dirname, '../client/index.js')],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../buildClient'),
    publicPath: '/static/'
  },
  stats: 'verbose',
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
          ExtractCssChunks.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              //   localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
        ]
      }    
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin(
        // uglifyOptions: {
        //   output: {
        //     comments: false,
        //     ascii_only: true
        //   },
        //   compress: {
        //     comparisons: false
        //   }
        // }
      )
    ],
    runtimeChunk: {
      name: 'bootstrap'
    },
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor'
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.css']
  },
  plugins: [
    new ExtractCssChunks({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        __isBrowser__: true
      }
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
};