import React from 'react';
import puppy from './imgs/puppy.jpg';
import './dogs.css';

export default () => (
    <div>
        <h1>Puppy Pic - as img tag</h1>
        <img src={puppy}/>
        <hr/>
        <h1>Puppy Pic - as background image</h1>
        <div className="puppy-bg"/>
    </div>
)
