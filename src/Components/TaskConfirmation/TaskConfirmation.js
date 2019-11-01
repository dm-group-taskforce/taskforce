import React from 'react'
import {Link} from 'react-router-dom'
import './TaskConfirmation.scss'

export default function TaskConfirmation(props) {
    let butts = {
        backgroundColor: '#13e6d8',
        color: 'black',
        fontSize: '1.5vw',
        margin: '1vw',
        borderRadius: '10px',
        border: 'none',
        outline: 'none'
    }
    return (
        <div>
            <p className="question">Would you like to add another task?</p>
            
            <button 
            style={butts}
            className="yes-btn"
            onClick={props.function}>Yes</button>

            <Link to='/profile'>
                <button 
                style={butts}
                className="no-btn">No</button>
            </Link>
        </div>
    )
}
