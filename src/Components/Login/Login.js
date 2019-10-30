import React, { Component } from 'react'
import './Login.scss';
import { connect } from 'react-redux'
import { loginUser } from '../../redux/reducers/userReducer'
import { Redirect } from 'react-router-dom'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

export class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInputs = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleLogin = () => {
        const { username, password } = this.state;
        this.props.loginUser({ username, password });
    }

    render() {
        let butts = {
            backgroundColor: '#13e6d8',
            color: 'black',
            width: '8vw',
            fontSize: '1vw'
        }
        if (this.props.redirect === true && this.props.user_id !== null) {
            return <Redirect to='/profile' />
        }
        return (
            <div className="lwholething">
                <div className="login-container">
                    <div>
                        <TextField
                            name='username'
                            label='Username'
                            className='username-input'
                            onChange={this.handleInputs}
                            margin='normal'
                            variant='filled'
                            autoComplete='off'
                        />
                    </div>
                    <div>
                        <TextField
                            name='password'
                            label='Password'
                            className='password-input'
                            onChange={this.handleInputs}
                            margin='normal'
                            variant='filled'
                            autoComplete='off'
                        />
                    </div>
                    <div>
                        <Button
                            style={butts}
                            variant='contained'
                            color='primary'
                            type='submit'
                            onClick={this.handleLogin}>Login</Button>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    redirect: reduxState.userReducer.redirect,
    user_id: reduxState.userReducer.user_id
})

const mapDispatchToProps = {
    loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
