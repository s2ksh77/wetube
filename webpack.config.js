const path = require("path");

// import path from "path"
const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: {
    rulse: [
        {
            web
        }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].[format]",
  },
};

module.exports = config;
