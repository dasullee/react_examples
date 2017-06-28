import React from 'react';
import ReactDOM from 'react-dom';

//import App from './components/app';

function greeting(user){
    return `${user.first_name} ${user.last_name}`;
}

const user = {
    first_name: 'Dave',
    last_name: 'Johns'
}

const greet = <h1>{`Welcome to our site, ${greeting(user)}`}</h1>

ReactDOM.render(
    greet,
    document.getElementById('root')
);
