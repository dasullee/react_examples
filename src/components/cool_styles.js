import React from 'react';
import Nested from './nested';
import './cool_styles.css';

export default () => (
    <div>
        <h2 className="cool-heading">Here are some cool styles</h2>
        <p className="cool-p">A well styled paragraph</p>
        <ul className="cool-list">
            <li>The</li>
            <li>Best</li>
            <li>List</li>
            <li>Ever</li>
        </ul>
        <Nested/>
    </div>
)
