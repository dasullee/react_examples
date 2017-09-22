import React, { Component } from 'react';

class Clock extends Component{
    constructor(props){
        super(props);

        this.state = {
            time: new Date()
        }
        console.log('Clock state:', this.state);
    }

    componentWillMount(){
        // Call the tick method every one second
        setInterval(() => this.tick(), 1000);
    }

    tick(){
        // Update state.time to a new time object
        this.setState({
            time: new Date()
        });
    }

    render(){
        return (
            <div>
                <h1>The time is: {this.state.time.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Clock;
