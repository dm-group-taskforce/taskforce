import Axios from 'axios';


const initialState = {
    abbreviation: 'a',
    img: 'a'
}

const GET_RANK = 'GET_RANK'

export function getRank(){
    return{
        type: GET_RANK,
        payload: Axios.get('/rank/get')
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case `${GET_RANK}_FULFILLED`:
            return {
            ...state,
            abbreviation: payload.data.abbreviation,
            img: payload.data.img
        }
        default: return state
    }
}