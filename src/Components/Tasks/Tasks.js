import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Tasks extends Component {
    render() {
        return (
            <div>
                {this.props.content}
                {this.props.type}
                {this.props.points}
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
