// eslint-disable-next-line no-unused-vars
const path = require("path");
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: "./index.js",

  target: "node",
  devServer: {
    port: "9500",
    contentBase: ["./public"],
    open: true,
    historyApiFallback: true,
  },
  output: {
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },

  plugins:[
    new Dotenv()
  ]
};
