const path = require('path');
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
      entry: path.join(__dirname, "src", "index.js"),
      output: {
        filename: '[name].js',
        path: __dirname + '/build',
        chunkFilename: '[id].[chunkhash].js'
      },
      mode:'development',
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
            new HtmlWebpackPlugin({
              template:'./public/index.html',
              filename:'./index.html'
            }),
            new webpack.ProvidePlugin({
              Buffer: ["buffer", "Buffer"],
              process: "process/browser",
            }),
          ],
}