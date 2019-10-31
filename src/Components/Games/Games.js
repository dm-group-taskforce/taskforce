import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./Games.scss";
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'

export class Games extends Component {

    constructor(){
        super();
        this.state = {
            style: ''
        }
    }

    componentDidMount(){
        let check = this.props.rank.toLowerCase();
        if (check === 'pvt' || check === 'pfc' || check === 'lcpl' || check === 'cpl' || check === 'sgt'){
            this.setState({style: 'greyOut'})
        }
        else{
            this.setState({style: ''})
        }
    }

    render() {
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
                <div className="gbutts">
                    <div className='game1'>
                        <div className="gbutt1">
                            <Link to='/games/1'><Button
                                style={butts}
                                variant="contained"
                                color="primary"
                            >PLAY LEVEL 1</Button></Link>
                        </div>
    
                    </div>
                    <div className={`game2 ${this.state.style}`}>
                        <div className="gbutt2">
                            <>
                            {this.state.style !== 'greyOut'? 
                              <Link to='/games/1'><Button
                              style={butts}
                              variant="contained"
                              color="primary"
                              >PLAY LEVEL 2</Button></Link>:
                              null
                        
                            }
                            </>
                            
                        </div>
    
                    </div>
    
    
                </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    rank: reduxState.rankReducer.abbreviation
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Games)
