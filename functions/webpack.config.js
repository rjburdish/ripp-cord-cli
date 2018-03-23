"use strict";

var nodeExternals = require("webpack-node-externals");
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
var TSLintPlugin = require("tslint-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    libraryTarget: "this" // <-- Important
  },
  target: "node", // <-- Important
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  watch: true,
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new TSLintPlugin({
      files: ["./src/**/*.ts"]
    })
    // new BundleAnalyzerPlugin()
  ],
  externals: [nodeExternals()] // <-- Important
};
