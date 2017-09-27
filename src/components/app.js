import React from 'react';
import Test from './test';
import ConnectTest from './connect_test';

const App = () => (
    <div className="container">
        <h1 className="mt-3">HOC Example</h1>
        <Test/>
        <ConnectTest/>
    </div>
);

export default App;
