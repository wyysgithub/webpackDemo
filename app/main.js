import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';

// const greeter = require('./Greeter.js');
// console.log("main")
// document.querySelector('#root').appendChild(greeter());

render(
    <Greeter/>,
    document.getElementById('root')
);