import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../NavBar/Navbar';
import logoatt9001 from "../../Assets/logoatt9001.png"
import hamburgergif from "../../Assets/hamburgergif.gif"
import Button from '@material-ui/core/Button';
import {logoutUser, getUser} from "../../redux/reducers/userReducer";
import "./SignedInNav.scss";


class SignedInNav extends React.Component {
    constructor() {
        super();
        this.state = {
            menuOpenStatus: "top-menu"
        }
    }

    toggle = () => {
        if (this.state.menuOpenStatus === "top-menu-close" || this.state.menuOpenStatus === "top-menu") {
            this.setState({ menuOpenStatus: "top-menu-open" });
        } else if (this.state.menuOpenStatus === "top-menu-open") {
            this.setState({ menuOpenStatus: "top-menu-close" });
        }
    }
    componentDidMount() {

            this.props.getUser()
    }
    handleClickLo = () => {
        this.props.logoutUser()
    }


    render() {
        
                let butts = {
            backgroundColor: '#13e6d8',
            color: 'black'
        }

        return (
            <>
            {this.props.loggedin !== null && this.props.redirect === true ? 
                <Redirect to="/profile"/>:
            this.props.loggedin === null ?
                <Redirect to="/"/>:
                null}
                <div className="thetop">
                    <Link to="/">

                        <img
                            className="Blogo"
                            alt="BigLogo"
                            src={logoatt9001}
                        />

                    </Link>
                    <ul>
                        <Link to='/profile'>                                    
                                    <Button 
                                    style={butts}
                                    variant="contained"
                                    color= "primary"
                                    >PROFILE</Button>
                            </Link>
                        <Link to='/games'>       
                                    <Button 
                                    style={butts}
                                    variant="contained"
                                    color= "primary"
                                    >GAMES</Button>
                            </Link>
                        <Link to='/account'>                                    <Button 
                                    style={butts}
                                    variant="contained"
                                    color= "primary"
                                    >ACCOUNT</Button>
                            </Link>
                        <Link to="/">    
                                    <Button 
                                    onClick={this.handleClickLo}
                                    style={butts}
                                    variant="contained"
                                    color= "primary"
                                    >LOG OUT</Button>
                            </Link> 
                        <li className="MB">
                            <img
                                onClick={this.toggle}
                                className="hamburgerB"
                                alt="hamburger"
                                src={hamburgergif} />

                        </li>
                    </ul>

                </div>
                <div className={`${this.state.menuOpenStatus}`}>
                    <div className = "openlist">
                    <Link to="/profile">
                        <h3 id="pro">PROFILE</h3> </Link>
                    <Link to="/games">
                        <h3 id="games">GAMES</h3>
                    </Link>
                    <Link to="/account">

                        <h3 id="acc">ACCOUNT</h3>
                    </Link>
                    <Link to="/">

                        <h3 id="lo"
                            onClick={this.handleClickLo}>LOG OUT</h3>
                    </Link>
                    </div>
                </div>



            </>
        )
    }
}



function mapStateToProps(reduxState) {
    return {
        loggedin: reduxState.userReducer.user_id,
        redirect: reduxState.userReducer.redirect
    }
}

export default connect(mapStateToProps, { logoutUser, getUser })(SignedInNav);