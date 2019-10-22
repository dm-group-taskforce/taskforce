import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Pie } from 'react-chartjs-2';
import Axios from 'axios';


class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {}
        } 
    }        

    componentDidMount() {
        const data = {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [{
                data: [],
                backgroundColor: ['red', 'blue', 'pink', 'green', 'purple', 'orange'],
                hoverBackgroundColor: ['red', 'blue', 'pink', 'green', 'purple', 'orange']
            }]
        }
        Axios.get(`/chart/get` ).then(response => {
            let arr = [];
            for ( let item in response.data[0]){
                arr.push(response.data[0][item])
                    
                
            }
            arr.splice(0, 2)
            data.datasets[0].data = [...arr]
            this.setState({chartData: {...data}})
        })
    }

    render() {
        return (
            <div className="chart-container" >
                <Pie
                    
                    data={this.state.chartData}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(Chart)
