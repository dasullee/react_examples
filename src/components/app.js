import React from 'react';
import CoolStyles from './cool_styles';
import StyleObj from './style_obj';
import Dogs from './dogs';

const App = () => (
    <div>
        <div className="main-header">
            <h1>Welcome to React!</h1>
            <h1>Now with style</h1>
            <hr/>
        </div>
        <CoolStyles/>
        <hr/>
        <StyleObj/>
        <hr/>
        <Dogs/>
        <hr/>
    </div>
);

export default App;
