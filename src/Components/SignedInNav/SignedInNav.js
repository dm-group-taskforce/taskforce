import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../NavBar/Navbar';
import logoatt9001 from "../../Assets/logoatt9001.png"
import hamburgergif from "../../Assets/myhamburgerbutton.png"
import Button from '@material-ui/core/Button';
import { logoutUser, getUser } from "../../redux/reducers/userReducer";
import "./SignedInNav.scss";
import xxx from "../../Assets/xxx.png"


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
        if (this.props.loggedin === null) {
            return (
                <Navbar />
            )
        }
        let butts = {
            backgroundColor: '#13e6d8',
            color: 'black',
            width: '8vw',
            fontSize: '1.5vw'
        }

        return (
            <>
                <div className="thetop">
                    <nav className="sitiptop">
                        <div className="sitop">
                            <Link to="/">

                                <img
                                    className="Blogo"
                                    alt="BigLogo"
                                    src={logoatt9001}
                                />

                            </Link>
                            <ul className="bignav">
                            <li className="lis">
                                <Link to='/profile'>
                                    <Button
                                        style={butts}
                                        variant="contained"
                                        color="primary"
                                    >PROFILE</Button>
                                </Link>
                                </li>
                                <li className="lis">
                                <Link to='/games'>
                                    <Button
                                        style={butts}
                                        variant="contained"
                                        color="primary"
                                    >GAMES</Button>
                                </Link>
                                </li>
                                <li className="lis">
                                <Link to='/account'>
                                    <Button
                                        style={butts}
                                        variant="contained"
                                        color="primary"
                                    >ACCOUNT</Button>
                                </Link>
                                </li>
                                <li className="lis">
                                <Link to="/">
                                    <Button
                                        onClick={this.handleClickLo}
                                        style={butts}
                                        variant="contained"
                                        color="primary"
                                    >LOGOUT</Button>
                                </Link>
                                </li>
                                <li className="MB">
                                {
                                    this.state.menuOpenStatus === "top-menu-close" || this.state.menuOpenStatus === "top-menu" ?
                                    <img
                                        onClick={this.toggle}
                                        className="hamburgerB"
                                        alt="hamburger"
                                        src={hamburgergif} />
                                        :
                                        <img
                                        onClick={this.toggle}
                                        className="xxx"
                                        alt="hamburger"
                                        src={xxx} />

                                }

                                </li>
                            </ul>

                        </div>
                        <div className={`${this.state.menuOpenStatus}`}>
                            <div className="openlist">
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
                                        onClick={this.handleClickLo}>LOGOUT</h3>
                                </Link>
                            </div>
                        </div>

                    </nav>
                </div>
            </>
        )
    }
}



function mapStateToProps(reduxState) {
    return {
        loggedin: reduxState.userReducer.user_id
    }
}

export default connect(mapStateToProps, { logoutUser, getUser })(SignedInNav);