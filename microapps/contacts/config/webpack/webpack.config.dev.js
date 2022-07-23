/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

const {APPROOT} = require('./paths')
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const custom = {}// require('./config/custom.webpack.config.dev');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const { MinChunkSizePlugin } = require('webpack').optimize;
const {peerDependencies, name, infinisoft} = require('../../package.json');
const { join } = require('path');

module.exports = merge(custom, common, {
  mode: 'development',
  output: {
    filename: '[name].[contenthash].js',
    path: join(APPROOT, 'artefacts', 'dev'),
    publicPath: 'auto',
  },
  devServer: {
    static: join(APPROOT, 'artefacts'),
    hot: true,
  },
  plugins: [
    new MinChunkSizePlugin({
      minChunkSize: 10000, // Minimum number of characters
    }),
    new ModuleFederationPlugin({
      name,
      filename: 'remoteEntry.js',
      remotes: infinisoft.moduleFederation.dev.remotes,
      exposes: {
        [`./${infinisoft.moduleFederation.component}`]: join(APPROOT, 'src', 'core'),
      },
      shared: {
        ...peerDependencies,
        "@infini-soft/store": { singleton: true, eager:true, requiredVersion: peerDependencies["@infini-soft/store"]},
        react: { singleton: true, eager:true, requiredVersion: peerDependencies.react },
        'react-dom': {
          singleton: true,
          eager:true, 
          requiredVersion: peerDependencies['react-dom'],
        },
      },
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: join(APPROOT, 'config', 'webpack', 'index.html'),
    }),
  ],
  devtool: 'eval-source-map',
});
