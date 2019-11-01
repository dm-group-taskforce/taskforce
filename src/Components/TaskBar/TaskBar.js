import React, { Component } from 'react'
import { connect } from 'react-redux'
import {TimelineMax} from 'gsap';
import './TaskBar.scss'

class TaskBar extends Component {
    
    constructor() {
        super();
        this.state={
            experience: 0,
            expS: {
                background: 'linear-gradient(to right, blue, red, yellow, green, pink)',
                height: "2vw",
                width: "0%",
                borderRadius: '25px'
            }
        }
    }

    componentDidMount(){
        this.demoIncreaseEXP(this.props.exp)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.experience !== this.state.experience){
            //let newExp =  this.state.experience - prevState.experience;
            //console.log(newExp)
            this.demoIncreaseEXP(this.props.exp)
        }
    }
    
    demoIncreaseEXP= (newExp) => {
        // this.setState({expS: {
        //     ...this.state.expS,
        //     width: (parseInt(this.state.expS.width[0]) + 1) + "0%"
        // }})
        //this.setState({exp: this.state.exp + 100});
        let ana = new TimelineMax();
        ana.to(".theexp", 2, {width: (newExp * 2) / 10 + "%"});
    }


    render() {
        let expbar = {
            backgroundColor: 'transparent',
            border: '5px solid rgb(186,186,186)',
            // border: '3px solid #13e6d8',
            height: "2vw",
            width: "90vw",
            borderRadius: '25px',
            marginTop: '2vw'
        }
        if (this.state.experience !== this.props.exp){

            this.setState({experience: this.props.exp})
        }
        return (
            <div className="thebar"
            style={(expbar)}>
            <div className="theexp"
            style={this.state.expS}>

            </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    exp: reduxState.characterReducer.experience
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskBar)