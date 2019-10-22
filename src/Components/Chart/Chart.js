import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Pie } from 'react-chartjs-2';


class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {}
        } 
    }        

    componentDidMount() {}

    render() {
        return (
            <div className="chart-container">
                <Pie
                    data={this.state.chartData}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart)
