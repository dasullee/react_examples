import React from 'react';
import './app.css';
import logo from './imgs/logo.svg';
import SigninForm from './signin_form';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="rotate"/>
            <h1>Welcome to React!</h1>
            <SigninForm/>
        </div>
    </div>
);

export default App;
