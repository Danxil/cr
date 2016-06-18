var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/client.ts',
  output: {
    filename: 'bundle.js',
    path: 'dist/public'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /(\.tsx|\.ts$)/,
        loader: 'ts'
      }
    ]
  }
}
