import React from 'react';
import { Link } from 'react-router-dom';
import ourlogo from "../../Assets/ourlogo.png"
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
                <nav className="tiptop">
                    <div className="top">
                        <Link to="/">

                            <img
                                className="Blogo"
                                alt="BigLogo"
                                src={ourlogo}
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
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" />

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
            </>
        )
    }
}


export default Navbar;