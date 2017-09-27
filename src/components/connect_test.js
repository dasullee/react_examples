import React from 'react';
import connect from './connect_hoc';
import { aCoolFunction, someOtherFunction } from './actions';

const ConnectTest =  props => {
    console.log('PROPS:', props);

    return (
        <div>
            <h1 className="my-4">Demo connect function</h1>
            <h3>{props.aCoolFunction()}</h3>
            <h3>{props.someOtherFunction()}</h3>
        </div>
    );
}

function mapStateToProps(state){
    return {
        num1: state.state1,
        num2: state.state2
    }
}

export default connect(mapStateToProps, { aCoolFunction, someOtherFunction })(ConnectTest);
