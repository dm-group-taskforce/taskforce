import React from "react";
import {connect} from 'react-redux';
import {getUserTask, addTask, editTask, deleteTask} from '../../redux/reducers/taskReducer';
import {Link} from 'react-router-dom'
import TaskConfirmation from '../TaskConfirmation/TaskConfirmation';
import './NewTask.scss'

class NewTask extends React.Component {

    constructor() {
        super();
        this.state = {
            content: '',
            type: 'health',
            time: 'daily',
            showCon: false
        }            
    }

    handleInputs = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    toggleShowCon = () =>{
        this.setState({showCon: !this.state.showCon})
    }

    determinePoints = ()=>{
        const {time} = this.state;
        if (time === 'daily'){
            return 5;
        }
        else if (time === 'weekly'){
            return 10;
        }
        else if (time === 'monthly'){
            return 15;
        }
    }
    handleAddTask = () => {
        const {addTask} = this.props;
        const {content, type, time} = this.state;
        addTask({
            content,
            type,
            time,
            points: this.determinePoints()
        })
        this.toggleShowCon();
        
    }

    handleDeleteTask(task_id) {
        const {deleteTask} = this.props;
        deleteTask(task_id); 
    }
    

    render() {
        return (
            <main>
                <div>
                    <h1>What to do:</h1>
                    <input 
                    className="task-content"
                    name='content' 
                    onChange={this.handleInputs} 
                    placeholder='content'/>
                </div>
                <div>
                    <select name='type' onChange={this.handleInputs}>
                        <option value='health'>
                            Health
                        </option>
                        <option value='social'>
                            Social
                        </option>
                        <option value='education'>
                            Education
                        </option>
                        <option value ='hobby'>
                            Hobby
                        </option>
                        <option value = 'work'>
                            Work
                        </option>
                        <option value ='personal'>
                            Personal
                        </option>
                    </select>
                </div>
                <div>
                    <select name='time' onChange={this.handleInputs}>
                        <option value = 'daily'>
                            Daily
                        </option>
                        <option value ='weekly'>
                            Weekly
                        </option>
                        <option value ='monthly'>
                            Monthly
                        </option>
                    </select>
                </div>
                <button 
                className="complete-task-btn" 
                onClick={this.handleAddTask}>Add Task</button>
                <Link to='/profile'>
                <button className="cancel-task-btn">Cancel</button></Link>
                {this.state.showCon === true ?
                <TaskConfirmation function={this.toggleShowCon}/>:
                null
                }
                
            </main>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    
})

export default connect(mapStateToProps, 
    {
        getUserTask,
        addTask,
        editTask, 
        deleteTask
    }
)(NewTask);