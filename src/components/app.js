import React from 'react';
import './app.css';
import logo from './imgs/logo.svg';
import Greeting from './greeting';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="rotate"/>
            <h1>Welcome to React!</h1>
            <Greeting name="Bob"/>
        </div>
    </div>
);

export default App;
