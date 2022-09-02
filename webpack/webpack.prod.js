const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: 'production',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'hockey.js',
    path: path.resolve(__dirname, 'webpack/dist'),
  },
};