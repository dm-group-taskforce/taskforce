import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../../redux/reducers/userReducer'
import { Redirect } from 'react-router-dom'
import "./Account.scss"
import TextField from "@material-ui/core/TextField";
import { NONAME } from 'dns'

export class Account extends Component {
    constructor() {
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
    handleEditInputs = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    //shows onclick
    handleEditClick = () => {
        this.setState({
            updateUserClicked: true

        })

    }

    handleSubmitEdits = (e) => {
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
        let butts = {
            backgroundColor: '#13e6d8',
            color: 'black',
            height: '2vw',
            width: '8vw',
            fontSize: '1.5vw',
            margin: '1vw',
            borderRadius: '10px',
            border: 'none',
            outline: 'none'
        }
        return (
            <main className="awholething">
                <div id="allacc">
                    <div className="acchead">

                        <h1>ACCOUNT PAGE</h1>
                    </div>


                    <div className="accinputs">
                        {
                            this.state.updateUserClicked === true ?
                                <section className="secinputs">
                                    <div>
                                    <TextField
                                        name='username'
                                        label='Username'
                                        className='register-input'
                                        onChange={this.handleEditInputs}
                                        margin="normal"
                                        variant="filled"
                                        autoComplete="off"
                                        defaultValue={this.props.username}
                                    />
                                    </div>
                                    <div>
                                    <TextField
                                        name='first_name'
                                        label='First Name'
                                        className='register-input'
                                        onChange={this.handleEditInputs}
                                        margin="normal"
                                        variant="filled"
                                        autoComplete="off"
                                        defaultValue={this.props.first_name}
                                    />
                                    </div>
                                    <div>
                                    <TextField
                                        name='last_name'
                                        label='Last Name'
                                        className='register-input'
                                        onChange={this.handleEditInputs}
                                        margin="normal"
                                        variant="filled"
                                        autoComplete="off"
                                        defaultValue={this.props.last_name}
                                    />
                                    </div>
                                    <div>
                                    <TextField
                                        name='email'
                                        label='Email'
                                        className='register-input'
                                        onChange={this.handleEditInputs}
                                        margin="normal"
                                        variant="filled"
                                        autoComplete="off"
                                        defaultValue={this.props.email}
                                    />
                                    </div>
                                <button style={butts}
                                    onClick={this.handleSubmitEdits}>SUBMIT</button>

                                </section>
                    :                     <div className={`${this.state.updateUserClicked}`}>
                    <h2>USERNAME: {this.props.username}</h2>
                    <h2>FIRSTNAME: {this.props.first_name}</h2>
                    <h2>LASTNAME: {this.props.last_name}</h2>
                    <h2>EMAIL: {this.props.email}</h2>
                    <button onClick={this.handleEditClick}
                        style={butts}>EDIT</button>
                </div>
            }
                    </div>

                </div>
            </main >
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
