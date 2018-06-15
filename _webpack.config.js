module.exports = {
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/dist`,
    filename: `bundle.js`
  },
  devServer: {
    contentBase: `${__dirname}/dist`,
    port: 8080
  },
  devtool: '#inline-source-map',
  module: {
    rules: [{
      test: /\.css$/,
      loader: ['style-loader', 'css-loader']
    }, {
      test: /.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extentions: [' ', '.js', '.jsx']
  }
};