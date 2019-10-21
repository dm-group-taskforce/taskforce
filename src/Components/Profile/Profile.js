import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getRank} from '../../redux/reducers/rankReducer'
import {getCharacter} from '../../redux/reducers/characterReducer'

export class Profile extends Component {

    constructor(){
        super();
        this.state = {
            allTasks: [{type: 'small', content: 'HI'}],
            smallTasks: [],
            mediumTasks: [],
            largeTasks: [],
            completedTasks: []
        }
    }

    componentDidMount(){
        this.props.getRank();
        this.props.getCharacter();
        const small =  this.state.allTasks.filter((el) => (
            el.type === 'small'
        ))
        const medium =  this.state.allTasks.filter((el) => (
            el.type === 'medium'
        ))
        const large =  this.state.allTasks.filter((el) => (
            el.type === 'large'
        ))
        this.setState({smallTasks: [...small], mediumTasks: [...medium], largeTasks: [...large]})
    }

    render() {
       
        const smallThings = this.state.smallTasks.map((el,i) => (
            <h1 key={i}>{el.content}</h1>
        ))
            
        return (
            <div>
                {smallThings}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    first_name: reduxState.userReducer.first_name,
    last_name: reduxState.userReducer.last_name,
    abbreviation: reduxState.rankReducer.abbreviation,
    img: reduxState.rankReducer.img,
    experience: reduxState.characterReducer.experience,
    max_experience: reduxState.characterReducer.max_experience
})

const mapDispatchToProps = {
    getRank,
    getCharacter
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
