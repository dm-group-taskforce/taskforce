import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Pie } from 'react-chartjs-2';
import {getChart} from '../../redux/reducers/chartReducer'
import './Chart.scss'

class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        } 
    }        

    componentDidMount() {
        
        this.props.getChart()
    }

    render() {
       
        return (
            <div className="chart-containerr" >
                <Pie
                    
                    data={this.props.chartData}
                />
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    chartData: reduxState.chartReducer.chartData
})

export default connect(mapStateToProps, {getChart})(Chart)
