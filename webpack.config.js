const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.html$/,
            use: 'text-loader'
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        watchOptions: {
            poll: true
        },
        compress: true,
        port: 8081,
        host: 'localhost',
        hot: true,
        inline: true
    },
    resolve: {
        mainFields: ['browserify', 'browser', 'module', 'main']
    }
}