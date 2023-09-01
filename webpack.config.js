const path = require('path');

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  mode: 'production',
  output: {
    libraryTarget: 'umd',
    filename: '[name].js',
    path: path.resolve('bin'),
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [/node_modules/, /\.test\.ts/]
      },
    ],
  },
};
