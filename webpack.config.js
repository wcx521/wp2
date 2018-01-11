
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        main: './src/main.js',
        'chunk': ['./src/chunk1.js','./src/chunk2.js']
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
            name: 'chunk'
        }),
        new HtmlWebpackPlugin({
            title: Date.now(),
            filename: 'ttt.html',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(['./dist'])
    ]
}