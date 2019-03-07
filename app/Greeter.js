/**
 * 由于webpack3.*  webpack2.*已经内置可处理JSON文件，这里我们无需再添加webpack1.*需要的json-loader。
 */
const config = require("./config.json");

module.exports = function () {
    console.log("greet");
    let greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
}
