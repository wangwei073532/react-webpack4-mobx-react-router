/**
 * Created by 11408 on 2018/8/24.
 */
const path = require("path");
const webpack = require("webpack");
const package = require('./package.json')
module.exports = {
    entry:{
        vendor: Object.keys(package.dependencies)
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].dll.js", // 生成的文件名字
        library: "[name]_library" // 生成文件的一些映射关系，与下面DllPlugin中配置对应
    },
    plugins: [
        // 使用DllPlugin插件编译上面配置的NPM包
        new webpack.DllPlugin({
            // 会生成一个json文件，里面是关于dll.js的一些配置信息
            path: path.join(__dirname, "dist", "[name]-manifest.json"),
            name: "[name]_library", // 与上面output中配置对应
            context: __dirname
        })
    ]
}