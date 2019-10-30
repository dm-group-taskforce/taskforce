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
                backgroundColor: 'red',
                height: "5vw",
                width: "0%"
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
        ana.to(".theexp", 2, {width: (newExp * 10) / 10 + "%"});
    }


    render() {
        let expbar = {
            backgroundColor: 'green',
            height: "5vw",
            width: "15vw"
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