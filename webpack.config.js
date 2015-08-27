const webpack = require('webpack');
const path = require('path');

const srcPath = path.join(__dirname, 'src');

module.exports = {
  target: 'web',
  devtool: 'inline-source-map',
  entry: [
    './src/client'
  ],
  output: {
    path: path.join(__dirname, 'build', 'scripts'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    root: srcPath,
    extensions: ['', '.js'],
    modulesdirectories: ['node_modules', 'src']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel-loader?stage=0'],
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
