import React, { Component } from 'react'
import regContent from '../../Assets/aliencollege.png';
import './Register.scss';
import { connect } from 'react-redux'
import {registerUser} from '../../redux/reducers/userReducer'
import {Redirect} from 'react-router-dom'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';


class Register extends Component {

    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    handleRegisterInputs = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleRegister = (e) => {
        e.preventDefault();
        const {username, password, first_name, last_name, email} = this.state;
        const { registerUser } = this.props;
        registerUser({
            username,
            password,
            first_name,
            last_name,
            email
        });
    }

    render() {

            let butts = {
                backgroundColor: '#13e6d8',
                color: 'black',
                width: '8vw',
                fontSize: '1vw',
                // borderRadius: '15px',
                // outline: 'none',
                // border: 'none'
            }
        if(this.props.redirect === true && this.props.user_id !== null) {
            return <Redirect to='/profile'/>
        }
        return (
            <main className="rwholething">
            <section className="intro-reg-page">
            <div className="outer-container">
                <div className="register-container">
                    <div className="content-box">
                        <img src="https://docs.google.com/drawings/d/e/2PACX-1vQ0ytGUBVJyZfA-0ol_DtaoGOJnYTocjCasJ7P9qneHhmwyX71kHWZb9U4nbVS3UxEMGY7ule37KCBY/pub?w=357&amp;h=158"/>
                        <h1>Motivate yourself to achieve your goals.</h1>
                        <p>It's time to have fun when you get things done! Join TaskForce and improve your life one task at a time.</p>
                    </div>

                    <div className="register-box">
                        <h1 className="welcome-message">Welcome to Task Force, <br/> please sign up below!</h1>
                        <div>
                            <TextField 
                            name='username' 
                            label='Username'
                            className='register-input'
                            onChange={this.handleRegisterInputs}
                            margin="normal"
                            variant="filled"
                            autoComplete="off"             
                            />
                        </div>
                        <div>
                            <TextField 
                            name='first_name'
                            label='First Name'
                            className='register-input'
                            onChange={this.handleRegisterInputs}
                            margin="normal"
                            variant="filled"
                            autoComplete='off'
                            
                            />
                        </div>
                        <div>
                            <TextField 
                            name='last_name'
                            type='last_name' 
                            label='Last Name'
                            className='register-input'
                            onChange={this.handleRegisterInputs}
                            margin="normal"
                            variant="filled"
                            autoComplete="off"
                            />
                        </div>
                        <div>
                            <TextField 
                            name='email' 
                            type='email'
                            label='Email'
                            className='register-input'
                            onChange={this.handleRegisterInputs}
                            margin="normal"
                            variant="filled"
                            autoComplete="off"
                            />
                        </div>
                        <div>
                            <TextField 
                            name='password' 
                            label='Password'
                            className='register-input'
                            onChange={this.handleRegisterInputs}
                            margin="normal"
                            variant="filled"
                            autoComplete="off"
                            />
                        </div>
                        <div className="register-btn">
                            <Button 
                            variant="contained" 
                            color="primary" 
                            type="submit" 
                            style={butts}
                            onClick={this.handleRegister}>Register</Button> 
                        </div>
                    </div>
                </div>
            </div>
            </section>
            </main>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    redirect: reduxState.userReducer.redirect,
    user_id: reduxState.userReducer.user_id
})

const mapDispatchToProps = {
    registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
