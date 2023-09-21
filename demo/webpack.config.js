const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = function (args) {
  return path.join.apply(path, [__dirname].concat(...arguments));
};

module.exports = {
  entry: [
    root('src/polyfills.ts'),
    root('src/bootstrap.ts')
  ],

  output: {
    path: root('dist'),
    filename: 'js/[name].js'
  },
  
  resolve: {
    modules: [path.join(__dirname, 'node_modules')],
    extensions: ['.js', '.mjs', '.ts', '.scss', '.html']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules\//],
        loader: 'ts-loader'
      },
      { test: /\.mjs$/, include: /node_modules/, type: 'javascript/auto' }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: root('public/index.html'),
      inject: true
    }),

    new CopyWebpackPlugin([{
      from: root('public')
    }]),

    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      root('src')
    )
  ],

  devServer: {
    contentBase: root('public'),
    stats: { chunkModules: false },
  }
};
