/**
 * Created by 11408 on 2018/7/24.
 */
module.exports = {
    plugins: [
        require('postcss-px2rem')(),
        require("postcss-cssnext")(),
        require("cssnano")(),
        require("css-declaration-sorter")({
            order: "concentric-css"
        }),
        require("css-mqpacker")(),
    ]
};