/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const {
  debug_paths,
  APPROOT,
  SHARED_COMPONENTS,
  SHARED_HELPERS
} = require("../paths");
const { join } = require("path");

if (process.DEBUG_PATH){
  debug_paths();
}

module.exports = {
  context: APPROOT,
  resolve: {
    cacheWithContext: false,
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      "@/config": join(APPROOT, "config"),
      "@/mock": join(APPROOT, "mock"),
      "@/app": join(APPROOT, "src", "app"),
      "@/core": join(APPROOT, "src", "core"),
      "@/services": join(APPROOT, "src", "services"),
      "@/components": SHARED_COMPONENTS,
      "@/helpers": SHARED_HELPERS
    }
  },
  experiments: {
    topLevelAwait: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-typescript",
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }]
            ],
            plugins: ["lodash"]
          }
        },
        exclude: /(node_modules|\*.stories.\*)/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  }
};
