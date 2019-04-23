const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: `${__dirname}/src/client/scripts/index.ts`,
  output: {
    path: `${__dirname}/src/client/dist`,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [require('autoprefixer')({ grid: true })]
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts'],
    modules: ['node_modules']
  },
  plugins: [new ExtractTextPlugin('style.css')],
  performance: {
    hints: false
  }
};
