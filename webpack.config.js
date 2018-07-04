var path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

var config = {
  entry: ["./src/App.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },

      //Css files loader
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new CopyWebpackPlugin([{ from: "public" }])]
};

module.exports = config;
