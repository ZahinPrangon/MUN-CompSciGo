import React from 'react';

import FormInput from '../Form-input/FormInput';
import CustomButton from '../Custom-Button/Custom-Button';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState( { email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className= 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit= {this.handleSubmit}>
                    <FormInput 
                        name = 'email' 
                        type = 'email' 
                        value = {this.state.email} 
                        handleChange = {this.handleChange}
                        label = 'email'
                        required />
                    <FormInput 
                        name = 'password' 
                        type = 'password' 
                        value = {this.state.password} 
                        handleChange = {this.handleChange}
                        label = 'password'
                        required />               
                </form>

                <CustomButton type = 'submit'>SIGN IN</CustomButton>
                <CustomButton onClick = {signInWithGoogle}>
                    SIGN IN WITH GOOGLE   
                </CustomButton>
            </div>
        );
    }
}

export default SignIn;