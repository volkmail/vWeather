const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack');

const ROOT_DIR = path.resolve(__dirname, '../');
console.log(ROOT_DIR);

module.exports = {
  target: ['web', 'es5'],
  entry: `${ROOT_DIR}/src/index.tsx`,
  output: {
    path: `${ROOT_DIR}/build`,
    clean: true,
    assetModuleFilename: 'assets/[name][ext]',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '...'],
    alias: {
      'src': `${ROOT_DIR}/src`,
      'api': `${ROOT_DIR}/src/api`,
      'components': `${ROOT_DIR}/src/components`,
      'pages': `${ROOT_DIR}/src/pages`,
      'assets': `${ROOT_DIR}/src/assets`,
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: `${ROOT_DIR}/public/index.html`,
      favicon: `${ROOT_DIR}/public/favicon.ico`,
    }),
    new DefinePlugin({
      _API_KEY_: '83fe5a5d279847d685553721232809',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(s?)css$/,
        oneOf: [
          {
            test: /\.module\.(s?)css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[name]__[local]__[hash:base64:5]',
                  },
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          },
          {
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|bmp)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
