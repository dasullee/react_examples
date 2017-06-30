import React, { Component } from 'react';

class SigninForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            form: {
                email: '',
                password: ''
            }
        }
    }

    handleFormSubmit(event){
        event.preventDefault();
        console.log('Called handleFormSubmit', this.state.form);

        const newState = {
            form: {
                email: '',
                password: ''
            }
        }
        this.setState(newState);
    }

    handleChange(event){
        const { name, value } = event.target;
        
        const { form } = this.state;
        form[name] = value;

        this.setState({form: {...form}});
    }

    render(){
        const { email, password } = this.state.form;
        
        return (
            <form onSubmit={(event) => { this.handleFormSubmit(event) }}>
                <div>
                    <label>Email </label>
                    <input type="email" value={email} name="email" onChange={ (event) => this.handleChange(event) }/>
                </div>
                <div>
                    <label>Password </label>
                    <input type="password" value={password} name="password" onChange={ (event) => this.handleChange(event) }/>
                </div>
                <button>Sign In</button>
            </form>
        )
    }
}

export default SigninForm;
