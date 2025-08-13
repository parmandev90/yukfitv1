const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const BASE_API_FALLBACK = process.env.BASE_API || 'https://yukfitproxy.up.railway.app';

module.exports = {
  mode: 'production',

  entry: './src/scripts/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[contenthash].chunk.js',
    clean: true,
  },

  module: {
    rules: [
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/images/[name].[contenthash][ext]' },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/assets', to: 'assets' },   // static assets
        { from: 'public/_redirects', to: '.' },    // SPA rewrite untuk Netlify
        // (opsional) { from: 'public/robots.txt', to: '.' },
        // (opsional) { from: 'public/favicon.ico', to: '.' },
      ],
    }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    // injeksi ENV (mendukung dua nama supaya aman)
    new webpack.DefinePlugin({
      'process.env.BASE_API': JSON.stringify(BASE_API_FALLBACK),
      'process.env.API_BASE_URL': JSON.stringify(BASE_API_FALLBACK),
    }),
  ],

  optimization: { splitChunks: { chunks: 'all' } },

  devServer: {
    static: { directory: path.join(__dirname, 'dist') },
    compress: true,
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
};
