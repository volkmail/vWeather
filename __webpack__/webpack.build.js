const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const PACKAGE = require('../package.json');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const fileName = `${PACKAGE.version}.[contenthash]`;

module.exports = () =>
  merge(common, {
    mode: 'production',
    output: {
      filename: `${fileName}.js`,
    },
    optimization: {
      minimizer: ['...', new CssMinimizerPlugin()],
    },
    plugins: [new MiniCssExtractPlugin({ filename: `${fileName}.css` })],
  });
