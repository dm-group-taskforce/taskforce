import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Account extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    handleAccEdit(){
        
    }
    render() {
        return (
            <div>
                <h1>ACCOUNT PAGE</h1>
                <h2>{this.props.username}</h2>
                <h2>{this.props.first_name}</h2>
                <h2>{this.props.last_name}</h2>
                <h2>{this.props.email}</h2>    
                <button>EDIT</button>            
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
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
