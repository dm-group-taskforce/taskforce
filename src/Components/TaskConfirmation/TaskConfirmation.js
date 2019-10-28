import React from 'react'
import {Link} from 'react-router-dom'
import './TaskConfirmation.scss'

export default function TaskConfirmation(props) {
    return (
        <div>
            <p>Would you like to add another task?</p>
            
            <button 
            className="yes-btn"
            onClick={props.function}>Yes</button>

            <Link to='/profile'>
                <button 
                className="no-btn">No</button>
            </Link>
        </div>
    )
}
