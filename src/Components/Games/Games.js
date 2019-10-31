
import React from "react";
import { Link } from 'react-router-dom';
import "./Games.scss";
import Button from '@material-ui/core/Button';


function Games() {

    let butts = {
        backgroundColor: '#13e6d8',
        color: 'black',
        width: '8vw',
        fontSize: '1.5vw'
    }
    return (
        <main className="gwholething">
            <div className="angry">
            <div className="gheader">
                <h1>MAKE SURE YOU ARE IN FULL SCREEN MODE BEFORE PRESSING PLAY</h1>
            </div>
            <div className=" gbutts">
                <div className="game1">
                    <div className="gbutt1">
                        <Link to='/games/1'><Button
                            style={butts}
                            variant="contained"
                            color="primary"
                        >PLAY LEVEL 1</Button></Link>
                    </div>

                </div>
                <div className="game2">
                    <div className="gbutt2">
                        <Link to='/games/1'><Button
                            style={butts}
                            variant="contained"
                            color="primary"
                        >PLAY LEVEL 2</Button></Link>
                    </div>

                </div>


            </div>
            </div>
        </main>
    )
}
export default Games;