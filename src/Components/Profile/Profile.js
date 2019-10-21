import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getRank} from '../../redux/reducers/rankReducer'
import {getCharacter} from '../../redux/reducers/characterReducer'

export class Profile extends Component {

    constructor(){
        super();
        this.state = {
            allTasks: [],
            smallTasks: [],
            mediumTasks: [],
            largeTasks: [],
            completedTasks: []
        }
    }

    componentDidMount(){
        this.props.getRank();
        this.props.getCharacter();
    }

    render() {
        this.state.allTasks.filter((el) => (
            if (el.type === 'small'){
                this.setState({smallTasks: [...this.state.smallTasks, el]})
            }
            else if (el.type === 'medium'){
                this.setState({mediumTasks: [...this.state.mediumTasks, el]})
            }
            else if (el.type === 'large'){
                this.setState({largeTasks: [...this.state.largeTasks, el]})
            }
        ))
        return (
            <div>
                
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
    max_experience: reduxState.characterReducer.max_experience
})

const mapDispatchToProps = {
    getRank,
    getCharacter
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
