import Axios from 'axios';


const initialState = {
    chartData: {}
}

const GET_CHART = 'GET_CHART';

export function getChart(){
    return {
        type: GET_CHART,
        payload: Axios.get(`/chart/get` )
    }
}

export default function Reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case `${GET_CHART}_FULFILLED`:
                const data = {
                    labels: ['Health', 'Social', 'Education', 'Hobby', 'Work', 'Personal'],
                    datasets: [{
                        data: [],
                        backgroundColor: ['red', 'blue', 'pink', 'green', 'purple', 'orange'],
                        hoverBackgroundColor: ['red', 'blue', 'pink', 'green', 'purple', 'orange']
                    }]
                }
                
                let arr = [];
                for ( let item in payload.data[0]){
                    arr.push(payload.data[0][item])
                        
                    
                }
                arr.splice(0, 2)
                data.datasets[0].data = [...arr]
            return{
                ...state,
                chartData: {...data}
            }
        default: return state;
    }
}