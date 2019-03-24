const path = require("path");
const HWP = require("html-webpack-plugin");
const MCEP = require("mini-css-extract-plugin");

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
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
      // {
      //   test: /\.(sc|c)ss$/,
      //   use: [
      //     {
      //       loader: MCDP.loader,
      //       options: {
      //         // you can specify a publicPath here
      //         // by default it use publicPath in webpackOptions.output
      //         publicPath: "../"
      //       }
      //     },
      //     "css-loader",
      //     "sass-loader"
      //   ]
      // }
    ]
  },
  devServer: {
    hot: true,
    open: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000
  },
  plugins: [
    new HWP({ template: path.join(__dirname, "/src/index.html") }),
    new MCEP({
      filename: "main.css"
    })
  ]
};
