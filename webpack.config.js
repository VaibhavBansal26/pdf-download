const path = require('path');
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

module.exports = {
      entry: ['babel-polyfill', './src/index.js'],
      output: {
        filename: '[name].js',
        path: __dirname + '/build',
        chunkFilename: '[id].[chunkhash].js'
      },
      mode:'development',
      devtool: 'source-map',
      module: {
        rules: [
          {
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            exclude: /node_modules/,
            use: ['file-loader?name=[name].[ext]']
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: ['file-loader'],
          },
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
        ]
      },
          resolve: {
            fallback: {
              process: require.resolve("process/browser"),
              zlib: require.resolve("browserify-zlib"),
              stream: require.resolve("stream-browserify"),
              util: require.resolve("util"),
              buffer: require.resolve("buffer"),
              asset: require.resolve("assert"),
            },
          },
          plugins: [
            new InterpolateHtmlPlugin({
              PUBLIC_URL: 'static' // can modify `static` to another name or get it from `process`
          }),
            new HtmlWebpackPlugin({
              template:'./public/index.html',
              filename:'./index.html',
              favicon: './public/favicon.ico',
              manifest: './public/manifest.json'
            }),
            new webpack.ProvidePlugin({
              Buffer: ["buffer", "Buffer"],
              process: "process/browser",
            }),
          ],
}