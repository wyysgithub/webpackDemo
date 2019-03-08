/**
 * CSS预处理器 postcss-loader
 * 自动添加前缀的插件 autoprefixer
 * https://github.com/postcss/postcss
 * npm install --save-dev postcss-loader autoprefixer
 */
module.exports = {
    plugins:[
        require('autoprefixer')
    ]
}