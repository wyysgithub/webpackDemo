/**
 * 产品阶段所用配置
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 *
 * 4.* 版本只能下 4.* 版本的extract-text-webpack-plugin  否则报错
 * npm install --save-dev extract-text-webpack-plugin@next
 * 如果报错 npm cache clean --force
 *
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// npm install --save-dev uglifyjs-webpack-plugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// npm install clean-webpack-plugin --save-dev 去除build文件中的残余文件  https://github.com/johnagan/clean-webpack-plugin
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle-[hash].js"
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }

                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin("版权所有 WangYangYang"),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(), //为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        // new webpack.optimize.UglifyJsPlugin(),   用于压缩JS代码  4.* 版本UglifyJsPlugin，替换成了optimization.minimize
        new ExtractTextPlugin("style.css"), //分离CSS和JS文件
        /**
         * 新版本参考
         *  https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional
         */
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false
                }
            })
        ]
    },
}