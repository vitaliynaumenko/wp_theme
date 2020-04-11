const webpack = require('webpack');
const path = require('path');

const PATHS = {
    src: path.join(__dirname, './src/js/'),
    dist: path.join(__dirname, './js'),
    assets: '/'
}


module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    externals: {
        path: PATHS
    },

    entry: {
        app: `${PATHS.src}index.js`
    },

    output: {
        filename: "app.min.js",
        path: PATHS.dist
    },

    module:{
        rules:[
            {
                test: /\.js$/,
                loader:"babel-loader",
                exclude:"/node_modules/"
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            JQ: 'jquery'
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: `[file].map`
        })
    ]

}
