module.exports = {
  entry: './MyPortfolio/MyApp/src/index.js',
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
            {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};