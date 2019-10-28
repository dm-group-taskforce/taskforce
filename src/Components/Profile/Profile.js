import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getRank, editRank} from '../../redux/reducers/rankReducer'
import {getCharacter} from '../../redux/reducers/characterReducer'
import Tasks from '../Tasks/Tasks';
import {getUserTask} from '../../redux/reducers/taskReducer'
import Chart from '../Chart/Chart';
import {Link} from 'react-router-dom'
import {deleteTask} from '../../redux/reducers/taskReducer'
import {getChart} from '../../redux/reducers/chartReducer'
import TaskBar from '../TaskBar/TaskBar'
import './Profile.scss'
import ranks from '../ranks';

export class Profile extends Component {

    constructor(){
        super();
        this.state = {
            allTasks: [],
            dailyTasks: [],
            weeklyTasks: [],
            monthlyTasks: [],
            completedTasks: [],
            img: '',
            neededExp: 0,
            index: 0
        }
    }

    componentDidMount(){
        this.props.getUserTask().then(() =>{
            this.setState({allTasks: [...this.props.tasks]}, this.handleStart)
        })
        // Axios.get('/task/get').then(response => {
            
        //     this.setState({allTasks: response.data}, this.handleStart)
        // })
        
        this.props.getRank().then(()=>{this.initializeRank()});
        this.props.getCharacter();
        
    }
    
    
    updateTasks = () =>{
        this.setState({allTasks: [...this.props.tasks]}, this.handleStart)
        this.props.getChart();
    }

    initializeRank = () =>{
        for (let i = 0; i < ranks.length; i++){
            if (ranks[i].abbreviation.toLowerCase() === this.props.abbreviation.toLowerCase()){
                
                this.setState({img: ranks[i].img, neededExp: ranks[i].expNeed, index: i})
            }
        }
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
        let toNext = this.state.neededExp - this.props.experience;
        if (toNext <= 0){
            this.props.editRank({
                abbreviation: ranks[this.state.index + 1].abbreviation,
                img: ranks[this.state.index + 1].img
            }).then(() => {this.initializeRank()})
        }
       
        const dailyThings = this.state.dailyTasks.map((el,i) => (
            <div key={i}>
            <Tasks
            
            id = {el.id}
            content = {el.content}
            type = {el.type}
            time = {el.time}
            points = {el.points}
            update = {this.updateTasks}
            />
            <button onClick = {() => {
                this.props.deleteTask(el.id).then(()=> {
                    this.updateTasks()
                })
            }}>Delete</button>
            </div>
        ))
        const weeklyThings = this.state.weeklyTasks.map((el,i) => (
            <div key={i}>
            <Tasks
           
            id = {el.id}
            content = {el.content}
            type = {el.type}
            time = {el.time}
            points = {el.points}
            update = {this.updateTasks}
            />
            <button onClick = {() => {
                this.props.deleteTask(el.id).then(()=> {
                    this.updateTasks()
                })
            }}>Delete</button>
            </div>
        ))
        const monthlyThings = this.state.monthlyTasks.map((el,i) => (
            <div key={i}>
            <Tasks
            
            id = {el.id}
            content = {el.content}
            type = {el.type}
            time = {el.time}
            points = {el.points}
            update = {this.updateTasks}
            />
            <button onClick = {() => {
                this.props.deleteTask(el.id).then(()=> {
                    this.updateTasks()
                })
            }}>Delete</button>
            </div>
        ))
        const completeThings = this.state.completedTasks.map((el,i) => (
            <div key={i}>
            <Tasks
            
            id = {el.id}
            content = {el.content}
            type = {el.type}
            time = {el.time}
            points = {el.points}
            
            />
            <button onClick = {() => {
                this.props.deleteTask(el.id).then(()=> {
                    this.updateTasks()
                })
            }}>Delete</button>
            </div>
        ))
            
        
        return (
            <div>
                <img src={this.state.img} alt='rank' style={{ width: '100px'}}/>
                <h1>To next rank: {toNext}</h1>
                <TaskBar/>
                <Link to='/tasks'><button className="add-task-btn">Add New Task</button></Link>
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
                
                <div className="chart-container">
                    <Chart />
                </div>
                
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
    getUserTask,
    deleteTask,
    getChart,
    editRank
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
