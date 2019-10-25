import React from 'react';
import { Link } from 'react-router-dom';
import logoatt9001 from "../../Assets/logoatt9001.png"
import hamburgergif from "../../Assets/hamburgergif.gif"
import "./NavBar.scss";


class Navbar extends React.Component {

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


    render() {
        return (
            <>
            <div className="thetop">
                <nav className="tiptop">
                    <div className="top">
                        <Link to="/">

                            <img
                                className="Blogo"
                                alt="BigLogo"
                                src={logoatt9001}
                            />

                        </Link>

                        <ul className="lilnav">
                            <Link to='/login'><li className="lis">LOGIN</li></Link>
                            <Link to='/register'><li className="lis">REGISTER</li></Link>
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
                        <Link to="/login">
                            <h3 id="log">LOGIN</h3> </Link>
                        <Link to="/register">
                            <h3 id="reg">REGISTER</h3>
                        </Link>
                    </div>



                </nav>
                </div>
            </>
        )
    }
}


export default Navbar;