const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    library: {
      name: "TransbankPos",
      type: "umd",
    },
    globalObject: "this",
  },
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util/"),
      path: require.resolve("path-browserify"),
      fs: false,
      child_process: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  mode: "production",
};
