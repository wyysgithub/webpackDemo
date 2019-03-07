import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

// const greeter = require('./Greeter.js');
// console.log("main")
// document.querySelector('#root').appendChild(greeter());

render(
    <Greeter/>,
    document.getElementById('root')
);