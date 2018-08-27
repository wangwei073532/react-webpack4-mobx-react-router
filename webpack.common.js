/**
 * Created by 11408 on 2018/7/23.
 */
const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'
module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
        commons:['react','react-dom','mobx']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: "/",
        filename: 'js/bundle.js',
        chunkFilename: "js/[name].[hash:8].chunk.js"
    },
    cache: true,
    context: __dirname,
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            inject: true,
            showErrors:true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            }
        }),
        new webpack.ProvidePlugin({
            React: 'react'
        }),
        new OptimizeCSSPlugin({
            // cssProcessorOptions: {safe: true}
        })

    ],

    module: {
        rules: [
            {
                test: /\.(scss|sass|less|css)$/,
                use: [
                    devMode ?
                        MiniCssExtractPlugin.loader :
                        "style-loader",
                    "css-loader",
                    "postcss-loader?sourceMap",
                    "resolve-url-loader",
                    "sass-loader?sourceMap"
                ],
                include: path.resolve(__dirname, "src")
            },
            {
                test: /\.(png|gif|jpg|jpeg|bmp|woff|woff2|svg|ttf|eot)$/,
                use: [{loader: 'url-loader', options: {limit: 8192, publicPath: '../images', outputPath: 'images/'}}]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.(mp3|mp4)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                // xml文件解析
                test: /\.xml$/,
                use: ["xml-loader"]
            }
        ]
    }
};
