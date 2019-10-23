import React, { Component } from 'react'
import { connect } from 'react-redux'
import {registerUser} from '../../redux/reducers/userReducer'
import {Redirect} from 'react-router-dom'

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

    handleInputs = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleRegister = () =>{
        const {username, password, first_name, last_name, email} = this.state;
        this.props.registerUser({
            username,
            password,
            first_name,
            last_name,
            email
        })
    }

    render() {
        if(this.props.redirect === true && this.props.user_id !== null){
            return <Redirect to='/profile'/>
        }
        return (

            <div className="register-container">
                <section>
                    <h1>Username:</h1>
                    <input name='username' onChange={this.handleInputs}/>
                </section>
                <section>
                    <h1>First Name:</h1>
                    <input name='first_name' onChange={this.handleInputs}/>
                </section>
                <section>
                    <h1>Last Name:</h1>
                    <input name='last_name' onChange={this.handleInputs}/>
                </section>
                <section>
                    <h1>Email: </h1>
                    <input name='email' onChange={this.handleInputs}/>
                </section>
                <section>
                    <h1>Password: </h1>
                    <input name='password' onChange={this.handleInputs}/>
                </section>
                <div className="register-btn">
                    <button onClick={this.handleRegister}>Register</button> 
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
    registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
