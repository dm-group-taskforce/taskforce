import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getRank} from '../../redux/reducers/rankReducer'
import {getCharacter} from '../../redux/reducers/characterReducer'

export class Profile extends Component {

    componentDidMount(){
        this.props.getRank();
        this.props.getCharacter();
    }

    render() {
        return (
            <div>
                {this.props.first_name}
                {this.props.last_name}
                {this.props.abbreviation}
                {this.props.img}
                {this.props.experience}
                {this.props.max_experience}
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
