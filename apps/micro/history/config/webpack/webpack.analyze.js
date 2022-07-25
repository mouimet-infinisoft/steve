/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { join } = require("path");
const { BundleStatsWebpackPlugin } = require("bundle-stats-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { APPROOT, PKGJSON, SHARED_PLUGINS } = require("../paths");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { ModuleFederationPlugin } = require("webpack").container;
const { MinChunkSizePlugin } = require("webpack").optimize;
const { peerDependencies, name, infinisoft } = require(PKGJSON);
const AnalyzerPlugin = require(join(SHARED_PLUGINS, "webpack_analyzer"));

module.exports = (env, argv) => {
  const analyzer = new AnalyzerPlugin({ name: "Analyzer", approot: APPROOT });

  const result = merge(common, {
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
      analyzer,
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

      new MinChunkSizePlugin({
        minChunkSize: 10000 // Minimum number of characters
      }),
      new HtmlWebpackPlugin({
        template: join(APPROOT, "config", "webpack", "index.html")
      }),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        bundleDir: join(APPROOT, "artefacts", "prod"),
        analyzerMode: "static",
        reportFilename: join(
          APPROOT,
          "artefacts",
          "analyze",
          analyzer.date,
          "deps.graph.html"
        )
      }),
      new BundleStatsWebpackPlugin({
        outDir: join("..", "..", "artefacts", "analyze", analyzer.date),
        baseline: env.ANALYZEBASELINE || false
      })
    ]
  });
  return result;
};
