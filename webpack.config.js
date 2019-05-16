const { resolve } = require('path');
const webpack = require('webpack');
const MinaEntryPlugin = require('@tinajs/mina-entry-webpack-plugin');
const MinaRuntimePlugin = require('@tinajs/mina-runtime-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const loaders = {
  script: {
    loader: 'babel-loader',
    options: {
      loaders: {
        script: {
          loader: 'babel-loader',
          options: {
            rootMode: 'upward',
          },
        },
      },
      extensions: {
        template: '.ttml',
        style: '.ttss',
      },
      publicPath: '/assets/images/',
      enforceRelativePath: false,
    },
  },
  // style: {
  //   loader: 'postcss-loader',
  //   options: {
  //     config: {
  //       path: resolve('./postcss.config.js'),
  //     },
  //   },
  // },
};

module.exports = {
  context: resolve('src'),
  entry: './app.mina',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name]',
    publicPath: '/',
    globalObject: 'wx',
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/,
      },
      {
        test: /\.mina$/,
        exclude: /node_modules/,
        use: [
          {
            loader: '@tinajs/mina-loader',
            options: loaders
          },
        ],
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[hash:6].[ext]',
          },
        },
      },
      {
        test: /\.wxs$/,
        use: [
          {
            loader: '@tinajs/wxs-loader',
            options: {
              name: 'wxs/[path]/[name].[hash:6].[ext]',
              context: resolve('src/wxs'),
            },
          },
        ],
      },
      {
        test: /\.wxml$/,
        use: [
          {
            loader: 'relative-file-loader',
            options: {
              name: 'wxml/[name].[hash:6].[ext]',
            },
          },
          {
            loader: '@tinajs/wxml-loader',
            options: {
              raw: true,
              enforceRelativePath: true,
              root: resolve('src'),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    symlinks: true,
    extensions: ['.ts', '.js']
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false,
    }),
    new MinaEntryPlugin({
      map: entry => ['es6-promise/dist/es6-promise.auto.js', entry],
    }),
    new MinaRuntimePlugin({
      runtime: './runtime.js',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'common.js',
      minChunks: 2,
      minSize: 0,
    },
    runtimeChunk: {
      name: 'runtime.js',
    },
  },
  mode: isProduction ? 'production' : 'none',
};
