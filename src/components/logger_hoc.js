import React, { Component } from 'react';

export default function (WrappedComponent, prefix){

    return class extends Component {

        log(infoToLog){
            console.log(prefix, infoToLog);
        }

        render(){
            return <WrappedComponent {...this.props} log={this.log}/>;
        }
    }
}
