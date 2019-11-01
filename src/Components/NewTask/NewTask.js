import React from "react";
import { connect } from 'react-redux';
import { getUserTask, addTask, editTask, deleteTask } from '../../redux/reducers/taskReducer';
import { Link } from 'react-router-dom'
import TaskConfirmation from '../TaskConfirmation/TaskConfirmation';
import TextField from "@material-ui/core/TextField";
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

    handleInputs = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    toggleShowCon = () => {
        this.setState({ showCon: !this.state.showCon })
    }

    determinePoints = () => {
        const { time } = this.state;
        if (time === 'daily') {
            return 5;
        }
        else if (time === 'weekly') {
            return 10;
        }
        else if (time === 'monthly') {
            return 15;
        }
    }
    handleAddTask = () => {
        const { addTask } = this.props;
        const { content, type, time } = this.state;
        addTask({
            content,
            type,
            time,
            points: this.determinePoints()
        })
        this.toggleShowCon();

    }

    handleDeleteTask(task_id) {
        const { deleteTask } = this.props;
        deleteTask(task_id);
    }


    render() {
        let butts = {
            backgroundColor: '#13e6d8',
            color: 'black',
            height: '2vw',
            width: '8vw',
            fontSize: '1.5vw',
            margin: '1vw',
            borderRadius: '10px',
            border: 'none',
            outline: 'none'
        }
        return (
            <div className="twholething">
                <main>
                    <div className="new-task-container">
                        <div className="new-task-form">
                            <TextField
                                name='content'
                                label='Task'
                                className='register-input'
                                onChange={this.handleInputs}
                                margin="normal"
                                variant="filled"
                                autoComplete="off"
                            />
                        <div className="drops">
                            <div className="droplearn">
                        <div className="drop1">
                            <select name='type' onChange={this.handleInputs} className="dropit1">
                                <option value='health'>
                                    Health
                        </option>
                                <option value='social'>
                                    Social
                        </option>
                                <option value='education'>
                                    Education
                        </option>
                                <option value='hobby'>
                                    Hobby
                        </option>
                                <option value='work'>
                                    Work
                        </option>
                                <option value='personal'>
                                    Personal
                        </option>
                            </select>
                        </div>
                        </div>
                        <div className="drop2">
                            <select name='time' onChange={this.handleInputs} className="dropit2">
                                <option value='daily'>
                                    Daily
                        </option>
                                <option value='weekly'>
                                    Weekly
                        </option>
                                <option value='monthly'>
                                    Monthly
                        </option>
                            </select>
                        </div>
                        </div>
                        <div className="tbutts">
                        <button
                        style={butts}
                            onClick={this.handleAddTask}>Add Task</button>
                        <Link to='/profile'>
                            <button 
                            style={butts}>Cancel</button></Link>
                        {this.state.showCon === true ?
                            <TaskConfirmation function={this.toggleShowCon} /> :
                            null
                        }
                        </div>
                    </div>
                    </div>
                </main>
            </div>
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