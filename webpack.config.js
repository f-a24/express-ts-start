const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    `${__dirname}/src/client/index.tsx`
  ],
  output: {
    path: `${__dirname}/public`,
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: ['node_modules']
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
