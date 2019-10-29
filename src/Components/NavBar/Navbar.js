import React from 'react';
import { Link } from 'react-router-dom';
import logoatt9001 from "../../Assets/logoatt9001.png"
import hamburgergif from "../../Assets/hamburgergif.gif"
import Button from '@material-ui/core/Button';
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
        let butts = {
            backgroundColor: '#13e6d8',
            color: 'black',
            height: '2vw',
            width: '8vw',
            fontSize: '125%'
        }
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
                            <li className="lis">
                                <Link  to='/login'>
                                    <Button 
                                    style={butts}
                                    variant="contained"
                                    color= "primary"
                                >LOGIN</Button>
                                </Link>
                                </li>
                            <li className="lis">
                                <Link to='/register'>
                                    <Button 
                                    style={butts}
                                    variant="contained" color="primary">REGISTER</Button></Link>
                                </li>
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
                            <h4 id="log">LOGIN</h4></Link>
                        <Link to="/register">
                            <h4 id="reg">REGISTER</h4>
                        </Link>
                    </div>



                </nav>
                </div>
            </>
        )
    }
}

export default Navbar;
