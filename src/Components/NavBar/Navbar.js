import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import logoatt9001 from "../../Assets/logoatt9001.png"
import hamburgergif from "../../Assets/myhamburgerbutton.png"
import Button from '@material-ui/core/Button';
import "./NavBar.scss";
import {connect} from 'react-redux';
import {getUser} from '../../redux/reducers/userReducer'
import xxx from "../../Assets/xxx.png"

class Navbar extends React.Component {

    constructor() {
        super();
        this.state = {
            menuOpenStatus: "top-menu-close"
        }
    }

    componentDidMount(){
        this.props.getUser();
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
            width: '8vw',
            fontSize: '1.5vw'
        }
        return (
            <>
            {this.props.user_id !== null && this.props.redirect === true ? 
                <Redirect to="/profile"/>:
            this.props.user_id === null ?
                <Redirect to="/"/>:
                null
        
            }
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
                        <Link to="/login">
                            <h3 id="log">LOGIN</h3></Link>
                        <Link to="/register">
                            <h3 id="reg">REGISTER</h3>
                        </Link>
                    </div>
                    </div>



                </nav>
                </div>
            </>
        )
    }
}

const mapStateToProps = (reduxState) =>(
    {
        user_id: reduxState.userReducer.user_id,
        redirect: reduxState.userReducer.redirect
    }
)

const mapDispatchToProps ={
    getUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
