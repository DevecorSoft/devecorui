const path = require('path')
module.exports = {
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/react', {runtime: 'automatic'}],
              '@babel/preset-typescript'
            ]
          }
        }
      }
    ]
  }
}
