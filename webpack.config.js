//webpack.config.js
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, './js'),
        filename: "app.min.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    //devtool: 'source-map',
    module: {
        // rules:[
        //     {
        //         test: /\.js$/,
        //         exclude: /node_modules/,
        //         use: {
        //             loader: "babel-loader",
        //             options: { presets: ["es2015"] }
        //         }
        //     }
        // ]
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.js?$/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     sourceMap: true
        // })
    ]
}