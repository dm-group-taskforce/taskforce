import Axios from 'axios';


const initialState = {
    abbreviation: 'a',
    img: 'a'
}

const GET_RANK = 'GET_RANK'
const EDIT_RANK = 'EDIT_RANK'

export function getRank(){
    return{
        type: GET_RANK,
        payload: Axios.get('/rank/get')
    }
}

export function editRank(newRank){
    return{
        type: EDIT_RANK,
        payload: Axios.put('/rank/edit', newRank)
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
        case `${EDIT_RANK}_FULFILLED`:
            return {
            ...state,
            abbreviation: payload.data.abbreviation,
            img: payload.data.img
        }
        default: return state
    }
}