
import React from "react";
import {Link} from 'react-router-dom'


function Games() {
    return (
        <main>
            <div>
                <Link to='/games/1'><button>Game1</button></Link>
                <Link to='/games/2'><button>Game2</button></Link>
               
            </div>
        </main>
    )
}
export default Games;