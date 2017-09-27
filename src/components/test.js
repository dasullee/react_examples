import React from 'react';
import loggerHoc from './logger_hoc';

const TestComponent = props => {
    return (
        <div>
            <h2>This is the Test Component</h2>
            <button onClick={() => props.log('Here is something to log')}>Click Me</button>
        </div>
    )
}

export default loggerHoc(TestComponent, 'Logged from the Test Component: ');
