var path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

const ENV = process.env.NODE_ENV || "development";
const PUBLIC_PATH = 'https://pwa-brussels.github.io/playgrounds-bxl/'; 

module.exports = {
  mode: ENV,
  watchOptions: {
    poll: true
  },
  stats: {
    colors: true
  },
  entry: "./src/scripts/app.js",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: "playgrounds-bxl",
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: "service-worker.js",
      minify: true,
      navigateFallback: PUBLIC_PATH + "index.html",
      staticFileGlobs: ["images/*", "scripts/*", "src/*"],
      runtimeCaching: [
        {
          urlPattern: /opendata\.brussels\.be/,
          handler: "cacheFirst"
        }
      ],
      importScripts: ["./src/scripts/sw-push.js"],
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              minimize: {
                safe: true
              }
            }
          },
          {
            loader: "sass-loader",
            options: {}
          }
        ]
      }
    ]
  }
};
