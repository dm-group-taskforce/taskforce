import React from "react";
import {connect} from 'react-redux';
import {getUserTask, addTask, editTask, deleteTask} from '../../redux/reducers/taskReducer';

class NewTask extends React.Component {

    constructor() {
        super();
        this.state = {}            
    }

    componentDidMount() {
        this.props.getUserTask(this.props.match.params.task_id);
    }

    handleAddTask() {
        const {addTask} = this.props;
        addTask()
    }

    handleDeleteTask(task_id) {
        const {deleteTask} = this.props;
        deleteTask(task_id); 
    }

    render() {
        const taskDisplay = this.props.tasks.map((tasks, index) => {
            return (
                <div className="task-container">
                    <div key={index} className='task-item'>                     
                        <p>{tasks}</p>
                        <button 
                        className="delete-task-btn"
                        type="button"
                        onClick={() => this.handleDeleteTask(this.props.match.params.task_id)}
                        >Delete</button>                                  
                    </div>               
                </div>
            )
        })

        return (
            <main>
                <div>
                    <p>Add new tasks</p>
                </div>
                {taskDisplay}
            </main>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        tasks: reduxState.cardReducer.tasks
    }
}

export default connect(mapStateToProps, 
    {
        getUserTask,
        addTask,
        editTask, 
        deleteTask
    }
)(NewTask);