import React, { Component } from 'react'
import { connect } from 'react-redux'
import {editTask} from '../../redux/reducers/taskReducer'
import {Link} from 'react-router-dom'
import {updateCharacter} from '../../redux/reducers/characterReducer'

export class Tasks extends Component {

    completeTask = () =>{
        const {content, type, points} = this.props;
        this.props.editTask(this.props.id, {
            content,
            type,
            points,
            time: 'completed'
        }).then(() => {
            this.props.updateCharacter({
                points: this.props.points
            });
            this.props.update();
        })
        
    }

   


    render() {
        return (
            <div>
                {this.props.content}
                {this.props.type}
                {this.props.points}
                {this.props.time !== 'completed'? 
                <>
                <Link to={`/tasks/${this.props.id}`}><button>Edit</button></Link>
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
    editTask,
    updateCharacter
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
