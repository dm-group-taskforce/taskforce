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
                {/* {this.props.type} */}
                {/* {this.props.points} */}
                {this.props.time !== 'completed'? 
                <div className="button-container">
                <Link to={`/tasks/${this.props.id}`}>
                <button
                className="edit-task-btn"
                >&#9998;</button></Link>
                
                <button 
                className="complete-task-btn"
                onClick={this.completeTask}>&#x2713;</button>

                <button 
                className="delete-task-btn"
                onClick = {() => {
                    this.props.delete(this.props.id).then(()=> {
                        this.props.update()
                    })
                }}>&#x2715;</button>

                </div>:
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
