import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Pie } from 'react-chartjs-2';
import {getChart} from '../../redux/reducers/chartReducer'


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
        console.log('string')
        return (
            <div className="chart-container" >
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
