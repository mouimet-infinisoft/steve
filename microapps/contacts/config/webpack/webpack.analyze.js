/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const { BundleStatsWebpackPlugin } = require("bundle-stats-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { APPROOT, ARTEFACT, PKGJSON } = require("./paths");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { ModuleFederationPlugin } = require("webpack").container;
const { MinChunkSizePlugin } = require("webpack").optimize;
const { peerDependencies, name, infinisoft } = require(PKGJSON);

const { join } = require("path");

module.exports = (env, argv) =>
  merge(common, {
    mode: "production",
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()]
    },

    plugins: [
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
            eager: false,
            requiredVersion: peerDependencies["@infini-soft/store"]
          },
          react: {
            singleton: true,
            eager: false,
            requiredVersion: peerDependencies.react
          },
          "react-dom": {
            singleton: true,
            eager: false,
            requiredVersion: peerDependencies["react-dom"]
          }
        }
      }),

      new MiniCssExtractPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportFilename: path.join(ARTEFACT, "analyze", "deps.graph.html")
      }),
      new BundleStatsWebpackPlugin({
        outDir: path.join("..", "artefacts", "analyze"),
        baseline: env.ANALYZEBASELINE || false
      }),
      new MinChunkSizePlugin({
        minChunkSize: 10000 // Minimum number of characters
      }),
      new HtmlWebpackPlugin({
        template: join(APPROOT, "config", "webpack", "index.html")
      })
    ]
  });
