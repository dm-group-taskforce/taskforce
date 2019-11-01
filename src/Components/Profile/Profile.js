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

class Profile extends Component {

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
                
                this.setState({img: ranks[i].img, neededExp: ranks[i].expNeed, index: i}, () =>{console.log(this.state.index)})
                
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
        if (toNext <= 0 && this.props.experience > 0){
            this.props.editRank({
                abbreviation: ranks[this.state.index + 1].abbreviation,
                img: ranks[this.state.index + 1].img
            }).then(() => {this.initializeRank()})
        }

        const dailyThings = this.state.dailyTasks.map((el,i) => (
            <div 
            className="daily-task-card"
            key={i}>

            <Tasks
            id = {el.id}
            content = {el.content}
            type = {el.type}
            time = {el.time}
            points = {el.points}
            update = {this.updateTasks}
            delete = {this.props.deleteTask}
            />
            </div>
        ))
        const weeklyThings = this.state.weeklyTasks.map((el,i) => (
            <div 
            className="weekly-task-card"
            key={i}>
            
            <Tasks           
            id = {el.id}
            content = {el.content}
            type = {el.type}
            time = {el.time}
            points = {el.points}
            update = {this.updateTasks}
            delete = {this.props.deleteTask}
            />
            </div>
        ))
        const monthlyThings = this.state.monthlyTasks.map((el,i) => (
            <div 
            className="monthly-task-card"
            key={i}>
            
            <Tasks
            id = {el.id}
            content = {el.content}
            type = {el.type}
            time = {el.time}
            points = {el.points}
            update = {this.updateTasks}
            delete = {this.props.deleteTask}
            />
            </div>
        ))
        const completeThings = this.state.completedTasks.map((el,i) => (
            <div 
            className="complete-task-card"
            key={i}>
            
            <Tasks
            id = {el.id}
            content = {el.content}
            type = {el.type}
            time = {el.time}
            points = {el.points}
            />
            <div>
                <button 
                className="delete-task-btn"
                onClick = {() => {
                    this.props.deleteTask(el.id).then(()=> {
                        this.updateTasks()
                    })
                }}>&#x2715;</button>
            </div>
            </div>
        ))
            
        
        return (
            <main className="pwholething">
            <div className="">
                <img src={this.state.img} alt='rank' style={{ width: '100px'}}/>
                <h1>{this.props.abbreviation} {this.props.last_name}</h1>
                <div className="title-rank">
                    <h1>To next rank: {toNext}</h1>
                </div>
                <TaskBar/>
                <Link to='/tasks'><button className="add-task-btn">Add New Task</button></Link>
                <div className="task-period-container">
                    
                    <div className="dsection">  
                        <div className="dheader">
                            <h1>Daily</h1>
                        </div> 
                        
                        <section className="daily-section">
                            {dailyThings}
                        </section>
                    </div>

                    <div className="wsection"> 
                        <div className="wheader">
                            <h1>Weekly</h1>
                        </div>
                        
                        <section className="weekly-section">
                            {weeklyThings}
                        </section>
                    </div>

                    <div className="msection"> 
                        <div className="mheader">
                            <h1>Monthly</h1>
                        </div>
                        <section className="monthly-section">
                            
                            {monthlyThings}
                        </section>
                    </div>

                    <div className="csection"> 
                        <div className="cheader">
                            <h1>Completed</h1>
                        </div>
                        <section className="completed-section">
                            
                            {completeThings}
                        </section>
                    </div>

                </div>
                {this.props.experience !== 0?
                    <div className="chart-container">
                        <Chart />
                    </div>:
                    null
            
                }
                
                
            </div>
            </main>
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
