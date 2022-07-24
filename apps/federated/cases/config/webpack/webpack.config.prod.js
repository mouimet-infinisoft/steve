/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { APPROOT, PKGJSON } = require("../paths");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
// const custom = require('./config/custom.webpack.config.prod');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { MinChunkSizePlugin } = require("webpack").optimize;
const { peerDependencies, name, infinisoft } = require(PKGJSON);
const { join } = require("path");

module.exports = merge({}, common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    path: join(APPROOT, "artefacts", "prod"),
    publicPath: "auto"
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    new MinChunkSizePlugin({
      minChunkSize: 10000 // Minimum number of characters
    }),
    new ModuleFederationPlugin({
      name,
      filename: "remoteEntry.js",
      remotes: infinisoft.moduleFederation.prod.remotes,
      exposes: {
        [`./${infinisoft.moduleFederation.component}`]: join(
          APPROOT,
          "src",
          "core"
        )
      },
      shared: {
        ...peerDependencies,
        "@infini-soft/store": {
          singleton: true,
          requiredVersion: peerDependencies["@infini-soft/store"]
        },
        react: {
          singleton: true,
          requiredVersion: peerDependencies.react
        },
        "react-dom": {
          singleton: true,
          requiredVersion: peerDependencies["react-dom"]
        }
      }
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: join(APPROOT, "config", "webpack", "index.html")
    })
  ]
});
