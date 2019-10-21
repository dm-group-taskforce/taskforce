import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../NavBar/Navbar';
import logoBIG from "../../Assets/logoBIG.png";
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
        if (this.props.loggedin === null) {
            return (
                <Navbar />
            )
        }

        return (
            <>
                <div>
                    <Link to="/">

                        <img
                            className="Blogo"
                            alt="BigLogo"
                            src={logoBIG}
                        />

                    </Link>
                    <ul>
                        <Link to='/profile'><li>PROFILE</li></Link>
                        <Link to='/games'><li>GAMES</li></Link>
                        <Link to='/account'><li>ACCOUNT</li></Link>
                        <Link to="/"> <li
                            onClick={this.handleClickLo}>LOG OUT</li>
                        </Link>
                        <li className="MB">
                            <img
                                onClick={this.toggle}
                                className="hamburgerB"
                                alt="hamburger"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" />

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
        loggedin: reduxState.user.user.id
    }
}

export default connect(mapStateToProps, { logoutUser, getUser })(SignedInNav);