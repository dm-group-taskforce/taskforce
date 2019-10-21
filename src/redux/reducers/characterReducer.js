import Axios from 'axios';


const initialState = {
    experience: 0,
    max_experience: 0
}

const GET_CHARACTER = 'GET_CHARACTER';

export function getCharacter(){
    return {
        type: GET_CHARACTER,
        payload: Axios.get('/character/get')
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){

        case `${GET_CHARACTER}_FULFILLED`:
            return {
                ...state,
                experience: payload.data.experience,
                max_experience: payload.data.max_experience
            }
        default: return state
    }
}