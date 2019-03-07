/**
 * 由于webpack3.*  webpack2.*已经内置可处理JSON文件，这里我们无需再添加webpack1.*需要的json-loader。
 */
// const config = require("./config.json");
import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component{
    render() {
        return (
            <div>
                {config.greetText}
            </div>
        );
    }
}
export default Greeter;
