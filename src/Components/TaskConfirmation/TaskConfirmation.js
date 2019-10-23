import React from 'react'
import {Link} from 'react-router-dom'

export default function TaskConfirmation(props) {
    return (
        <div>
            <p>Would you like to add another task?</p>
            <button onClick={props.function}>Yes</button>
            <Link to='/profile'><button>No</button></Link>
        </div>
    )
}
