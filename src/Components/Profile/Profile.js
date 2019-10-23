import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getRank} from '../../redux/reducers/rankReducer'
import {getCharacter} from '../../redux/reducers/characterReducer'
import Tasks from '../Tasks/Tasks';
import {getUserTask} from '../../redux/reducers/taskReducer'
import Chart from '../Chart/Chart';
import Axios from 'axios'

export class Profile extends Component {

    constructor(){
        super();
        this.state = {
            allTasks: [],
            dailyTasks: [],
            weeklyTasks: [],
            monthlyTasks: [],
            completedTasks: []
        }
    }

    componentDidMount(){
        // this.props.getUserTask();
        // this.setState({allTasks: [...this.props.tasks]})
        Axios.get('/task/get').then(response => {
            
            this.setState({allTasks: response.data}, this.handleStart)
        })
        
        this.props.getRank();
        this.props.getCharacter();
        
    }

    handleStart = () => {
        const daily =  this.state.allTasks.filter((el) => (
            el.time === 'daily'
        ))
        const weekly =  this.state.allTasks.filter((el) => (
            el.time === 'weekly'
        ))
        const monthly =  this.state.allTasks.filter((el) => (
            el.time === 'monthly'
        ))
        const completed =  this.state.allTasks.filter((el) => (
            el.time === 'completed'
        ))
        this.setState({dailyTasks: [...daily], weeklyTasks: [...weekly], monthlyTasks: [...monthly], completedTasks: [...completed]})
    }

    render() {
       
        const dailyThings = this.state.dailyTasks.map((el,i) => (
            <Tasks
            key={i}
            id = {el.id}
            content = {el.content}
            type = {el.type}
            time = {el.time}
            points = {el.points}
            />
        ))
        const weeklyThings = this.state.weeklyTasks.map((el,i) => (
            <Tasks
            key={i}
            id = {el.id}
            content = {el.content}
            type = {el.type}
            time = {el.time}
            points = {el.points}
            />
        ))
        const monthlyThings = this.state.monthlyTasks.map((el,i) => (
            <Tasks
            key={i}
            id = {el.id}
            content = {el.content}
            type = {el.type}
            time = {el.time}
            points = {el.points}
            />
        ))
        const completeThings = this.state.completedTasks.map((el,i) => (
            <Tasks
            key={i}
            id = {el.id}
            content = {el.content}
            type = {el.type}
            time = {el.time}
            points = {el.points}
            />
        ))
            
        
        return (
            <div>
                <button>Add New Task</button>
                <section>
                    <h1>Daily</h1>
                    {dailyThings}
                </section>

                <section>
                    <h1>Weekly</h1>
                    {weeklyThings}
                </section>

                <section>
                    <h1>Monthly</h1>
                    {monthlyThings}
                </section>

                <section>
                    <h1>Completed</h1>
                    {completeThings}
                </section>
                <Chart/>
                
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
    max_experience: reduxState.characterReducer.max_experience,
    tasks: reduxState.taskReducer.tasks
})

const mapDispatchToProps = {
    getRank,
    getCharacter,
    getUserTask
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
