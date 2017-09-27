import React, { Component } from 'react';

const state = {
    state1: 'From state 1',
    state2: 'From state 2',
    state3: 'From state 3'
}

const dispatch = (action) => {
    return () => {
        return action() + ' to go walking.';
    }
}

export default (mstp, actions) => {
    const newState = mstp(state);
    const newActions = {};

    Object.keys(actions).map((key, index) => newActions[key] = dispatch(actions[key]));

    return (WrappedComponent) => {
        return class extends Component {
            render(){
                return <WrappedComponent {...this.props} {...newState} {...newActions}/>
            }
        }
    }
}
