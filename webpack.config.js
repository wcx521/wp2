
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        main: './src/main.js',
        main1: './src/main1.js',
        jquery: ["jquery"],
        vue: ["vue"]
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
            names: ["common","jquery","vue","load"],
            minChunks:2
        }),
        new HtmlWebpackPlugin({
            title: Date.now(),
            filename: 'ttt.html',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(['./dist'])
    ]
}