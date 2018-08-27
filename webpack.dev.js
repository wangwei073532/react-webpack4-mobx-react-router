/**
 * Created by 11408 on 2018/7/23.
 */
const webpack = require('webpack')
const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const jarvis = require('webpack-jarvis')
const common = require('./webpack.common.js');
module.exports = merge(common, {
    mode:'development',
    devtool: 'cheap-module-eval-source-map ',
    optimization:{
        occurrenceOrder: true,
        runtimeChunk: {
            name: 'manifest'
        },
        minimizer: [
            new UglifyJsPlugin()
        ],
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: false,
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    chunks: 'initial',
                    priority: -10,
                    reuseExistingChunk: false,
                    test: /node_modules\/(.*)\.js/
                },
                styles: {
                    name: 'styles',
                    test: /\.(scss|css)$/,
                    chunks: 'all',
                    minChunks: 1,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        }
    },
    plugins:[
        //抽离css
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new jarvis({
            port: 8081
        })
    ],
    devServer: {
        proxy: {
        },
        disableHostCheck: true,
        historyApiFallback: true, //不跳转
        hot: true,
        inline: true,
        port: 8080,
        host: 'localhost',
        open: true,
        contentBase: path.join(__dirname, "dist"),
        compress: true, // enable gzip compression
    }
});
