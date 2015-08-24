const webpack = require('webpack');
const path = require('path');

const srcPath = path.join(__dirname, 'src');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:5200',
    'webpack/hot/only-dev-server',
    './src/client'
  ],
  output: {
    path: path.join(__dirname, 'build/scripts/'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:5200'
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
      {test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/}
    ]
  }
};
