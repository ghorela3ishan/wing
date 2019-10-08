const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');


module.exports = merge(common, {
    mode:'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "",
        filename: "bundle.js"
      },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hot: true
    }
});