import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios'
import {editTask} from '../../redux/reducers/taskReducer'
import {Link} from 'react-router-dom'

export class EditTask extends Component {

    constructor(props){
        super(props)
        this.state = {
            content: '',
            type: '',
            time: '',
            points: ''  
        }
    }

    componentDidMount(){
        Axios.get(`/task/get?taskId=${this.props.match.params.taskId}`).then(response => {
            this.setState({
                content: response.data.content,
                type: response.data.type,
                time: response.data.time,
                points: response.data.points
            })
        })
        
    }

    handleEdit = () =>{
        const {content, type, time, points} = this.state
        this.props.editTask(this.props.match.params.taskId,{
            content,
            type,
            time,
            points
        })
    }

    handleInputs = e =>{
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <div>
                <div>
                    <h1>What to do:</h1>
                    <input name='content' onChange={this.handleInputs} placeholder={this.state.content}/>
                </div>
                <div>
                    <select name='type' onChange={this.handleInputs} placeholder={this.state.type}>
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
                    <select name='time' onChange={this.handleInputs} placeholder={this.state.time}>
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
                <Link onClick={this.handleEdit} to='/profile'><button>Confirm</button></Link>
                <Link to ='/profile'><button>Cancel</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    editTask
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTask)
