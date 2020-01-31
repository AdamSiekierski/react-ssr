const nodeExternals = require('webpack-node-externals')
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const serverConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    publicPath: '/'
  },
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'assets/bundle.css' })],
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/env',
            '@babel/react'
          ]
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  }
}

const appConfig = {
  entry: './src/app/browser.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'bundle.css' })],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/env',
            '@babel/react'
          ]
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
}

module.exports = [serverConfig, appConfig]