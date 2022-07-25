/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const { APPROOT, PKGJSON } = require("../paths");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const custom = {}; // require('./config/custom.webpack.config.dev');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const { MinChunkSizePlugin } = require("webpack").optimize;
const { peerDependencies, name, infinisoft } = require(PKGJSON);
const { join } = require("path");
const { MFLiveReloadPlugin } = require("@module-federation/fmr");

module.exports = merge(custom, common, {
  mode: "development",
  output: {
    filename: "[name].[contenthash].js",
    path: join(APPROOT, "artefacts", "dev"),
    publicPath: "auto"
  },
  devServer: {
    static: join(APPROOT, "artefacts", "dev"),
    hot: false,
    liveReload: true,
    port: infinisoft.moduleFederation.devport,
    open: "/",
    historyApiFallback: true
  },
  plugins: [
    new MFLiveReloadPlugin({
      port: infinisoft.moduleFederation.devport,
      container: name,
      standalone: true
    }),
    new MinChunkSizePlugin({
      minChunkSize: 10000
    }),
    new ModuleFederationPlugin({
      name,
      filename: "remoteEntry.js",
      remotes: infinisoft.moduleFederation.dev.remotes,
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
        react: { singleton: true, requiredVersion: peerDependencies.react },
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
  ],
  devtool: "eval-source-map"
});
