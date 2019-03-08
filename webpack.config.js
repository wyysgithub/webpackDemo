// 开发环境

// const path = require('path');

module.exports = {
    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },

    /**
     *  使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap
     */

    devtool: 'eval-source-map',


    /**
     * 本地服务器
     *
     * npm install --save-dev webpack-dev-server
     *
     */
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },

    /**
     * Babel
     * Babel其实是几个模块化的包，其核心功能位于称为babel-core的npm包中，webpack可以把其不同的包整合在一起使用，对于每一个你需要的功能或拓展，你都需要安装单独的包
     * 用得最多的是解析Es6的babel-env-preset包和解析JSX的babel-preset-react包。
     *
     *  npm install --save-dev babel-core babel-loader@7 babel-preset-env babel-preset-react
     *
     *  (这里用7版本是因为最新8版本不兼容（2019/03/07）)
     *
     */

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    //
                    // webpack会自动调用.babelrc里的babel配置选项
                    //
                    // options: {
                    //     presets:[
                    //         "env","react"
                    //     ]
                    // }
                },
                exclude: /node_modules/
            }
            ,
            /**
             *   css-loader 和 style-loader
             *
             *   css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能
             *   style-loader将所有的计算后的样式加入页面中
             *   二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。
             *
             *   npm install --save-dev style-loader css-loader
             *
             */
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules : true, //启用css nodules
                            // localIdentName:'[name]__[local]--[hash:base64:5]' //指定css的类名格式   Greeter__root--16xre
                        }
                    },
                    {
                        loader: "postcss-loader"  // 生成的类名 _16xre3sc5AxHpoaZlFB-tH
                    }
                ]
            }
        ]
    }
}