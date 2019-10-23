import React, { Component } from 'react'
import { connect } from 'react-redux'
import {editTask} from '../../redux/reducers/taskReducer'

export class Tasks extends Component {

    completeTask = () =>{
        const {content, type, points} = this.props;
        this.props.editTask(this.props.id, {
            content,
            type,
            points,
            time: 'completed'
        }).then(() => {
            this.props.update();
        })
        
    }

    render() {
        return (
            <div>
                {this.props.content}
                {this.props.type}
                {this.props.points}
                <button>Delete</button>
                {this.props.time !== 'completed'? 
                <>
                <button>Edit</button>
                <button onClick={this.completeTask}>Complete Task</button>
                </>:
                null
            
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    editTask
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
