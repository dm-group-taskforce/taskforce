import React, { Component } from 'react'
import { connect } from 'react-redux'
import {loginUser} from '../../redux/reducers/userReducer'
import {Redirect} from 'react-router-dom'

export class Login extends Component {

    constructor(){
        super();
        this.state ={
            username: '',
            password: ''
        }
    }

    handleInputs = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleLogin = () => {
        const {username, password} = this.state;
        this.props.loginUser({username, password});
    }

    render() {
            if(this.props.redirect === true && this.props.user_id !== null){
                return <Redirect to='/profile'/>
            }
        return (
              
            <div>
                <section>
                    <h1>Username</h1>
                    <input name='username' onChange={this.handleInputs}/>
                </section>
                <section>
                    <h1>Password</h1>
                    <input name='password' onChange={this.handleInputs}/>
                </section>
                <button onClick={this.handleLogin}>Login</button>
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
