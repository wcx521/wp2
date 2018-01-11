
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        vendor: ["./src/canvas-nest.js","./src/co.js"],
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].[chunkhash:6].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
            },
            exclude: /node_modules/
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['vendor']
        }),
        new HtmlWebpackPlugin({
            title: Date.now(),
            filename: 'ttt.html',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(['./dist'])
    ]
}