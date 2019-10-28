import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateUser} from '../../redux/reducers/userReducer'
import {Redirect} from 'react-router-dom'

export class Account extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            updateUserClicked: false
        }
    }
    //while typing
    handleEditInputs= e => {
        this.setState({[e.target.name]: e.target.value})
    }
    //shows onclick
    handleEditClick = () => {
        this.setState({
            updateUserClicked: true

        })

    }

    handleSubmitEdits= (e) => {
        e.preventDefault();
        // const {username, first_name, last_name, email} = this.state;
        this.props.updateUser({
            username: this.state.username || this.props.username,
            first_name: this.state.first_name || this.props.first_name,
            last_name: this.state.last_name || this.props.last_name,
            email: this.state.email || this.props.email
        }).then(() => {

        this.setState({ updateUserClicked: false });
        })
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <div>
                    <h1>ACCOUNT PAGE</h1>
                    <h2>{this.props.username}</h2>
                    <h2>{this.props.first_name}</h2>
                    <h2>{this.props.last_name}</h2>
                    <h2>{this.props.email}</h2>    
                    <button onClick= {this.handleEditClick}>EDIT</button> 
                </div>
                <div>
                    {
                        this.state.updateUserClicked === true ?
                        <section>
                            <input className="fillins"
                                    name="username"
                                    onChange={this.handleEditInputs}
                                    defaultValue={this.props.username}
                            ></input>
                            <input className="fillins"
                                    name="first_name"
                                    onChange={this.handleEditInputs}
                                    defaultValue={this.props.first_name}
                            ></input>
                            <input className="fillins"
                                    name="last_name"
                                    onChange={this.handleEditInputs}
                                    defaultValue={this.props.last_name}
                            ></input>
                            <input className="fillins"
                                    name="email"
                                    onChange={this.handleEditInputs}
                                    defaultValue={this.props.email}
                            ></input>
                            <button className="subbut" 
                                onClick={this.handleSubmitEdits}>SUBMIT</button>
                                        
                        </section>
                        : null
                    }
                </div>

            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    first_name: reduxState.userReducer.first_name,
    last_name: reduxState.userReducer.last_name,
    email: reduxState.userReducer.email,
    username: reduxState.userReducer.username
})

const mapDispatchToProps = {
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
