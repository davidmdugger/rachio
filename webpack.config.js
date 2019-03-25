const path = require("path");
const HWP = require("html-webpack-plugin");
const MCEP = require("mini-css-extract-plugin");

module.exports = {
  entry: ["babel-polyfill", path.join(__dirname, "/src/index.js")],
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist"),
    publicPath: "/" // specifiy path for all assets, including 404 not found
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader"
      }
    ]
  },
  devServer: {
    hot: true,
    open: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
    historyApiFallback: true // redirect back to root route for 404
  },
  plugins: [
    new HWP({ template: path.join(__dirname, "/src/index.html") }),
    new MCEP({
      filename: "main.css"
    })
  ]
};
