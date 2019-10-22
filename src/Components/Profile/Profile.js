import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getRank} from '../../redux/reducers/rankReducer'
import {getCharacter} from '../../redux/reducers/characterReducer'

export class Profile extends Component {

    constructor(){
        super();
        this.state = {
            allTasks: [{type: 'daily', content: 'HI'}],
            dailyTasks: [],
            weeklyTasks: [],
            monthlyTasks: [],
            completedTasks: []
        }
    }

    componentDidMount(){
        this.props.getRank();
        this.props.getCharacter();
        const daily =  this.state.allTasks.filter((el) => (
            el.type === 'daily'
        ))
        const weekly =  this.state.allTasks.filter((el) => (
            el.type === 'weekly'
        ))
        const monthly =  this.state.allTasks.filter((el) => (
            el.type === 'monthly'
        ))
        const completed =  this.state.allTasks.filter((el) => (
            el.type === 'completed'
        ))
        this.setState({dailyTasks: [...daily], weeklyTasks: [...weekly], monthlyTasks: [...monthly], completedTasks: [...completed]})
    }

    render() {
       
        const dailyThings = this.state.dailyTasks.map((el,i) => (
            <h1 key={i}>{el.content}</h1>
        ))
        const weeklyThings = this.state.weeklyTasks.map((el,i) => (
            <h1 key={i}>{el.content}</h1>
        ))
        const monthlyThings = this.state.monthlyTasks.map((el,i) => (
            <h1 key={i}>{el.content}</h1>
        ))
        const completeThings = this.state.completedTasks.map((el,i) => (
            <h1 key={i}>{el.content}</h1>
        ))
            
        return (
            <div>
                <section>
                    {dailyThings}
                </section>

                <section>
                    {weeklyThings}
                </section>

                <section>
                    {monthlyThings}
                </section>

                <section>
                    {completeThings}
                </section>

                
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
