import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getUser} from '../redux/reducers/userReducer'
import SignedInNav from './SignedInNav/SignedInNav'
import Navbar from './NavBar/Navbar'

export class NavHolder extends Component {

    componentDidMount(){
        this.props.getUser();
    }

    render() {
        return (
            <div>
                {this.props.user_id !== null?
                    <SignedInNav/>:
                this.props.user_id === null?
                    <Navbar/>:
                    null
                }
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    user_id: reduxState.userReducer.user_id,
    redirect: reduxState.userReducer.redirect
})

const mapDispatchToProps = {
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(NavHolder)
