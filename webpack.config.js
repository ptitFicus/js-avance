const path = require("path");
const webpack = require("webpack");

const config = {
  context: __dirname + "/src",
  entry: {
    app: "./app.js",
    inventory: "./inventory.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js",
    publicPath: "/assets"
  },
  devServer: {
    contentBase: __dirname + "/src"
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["es2015"] }
          }
        ]
      }
    ]
  }
};

if (process.env.NODE_ENV === "production") {
  config.devtool = "source-map";
}

module.exports = config;
