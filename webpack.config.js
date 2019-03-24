const path = require("path");
const HWP = require("html-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", path.join(__dirname, "/src/index.js")],
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    hot: true,
    open: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000
  },
  plugins: [new HWP({ template: path.join(__dirname, "/src/index.html") })]
};
