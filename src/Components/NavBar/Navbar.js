import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
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
            <div>
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
                            <Link to='/login'><Button variant="contained" color="primary">LOGIN</Button></Link>
                            <Link to='/register'><Button variant="contained" color="primary">REGISTER</Button></Link>
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
                            <h4 id="log">LOGIN</h4></Link>
                        <Link to="/register">
                            <h4 id="reg">REGISTER</h4>
                        </Link>
                    </div>



                </nav>
            </div>
        )
    }
}

export default Navbar;
