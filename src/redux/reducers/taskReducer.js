import Axios from "axios";

const initialState = {
    tasks: []
}

// Action Types
const GET_USER_TASK = 'GET_USER_TASK';
const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';

export function getUserTask() {
    return {
        type: GET_USER_TASK,
        payload: Axios.get('/task/get')
    }
}
export function addTask(newTask) {
    return {
        type: ADD_TASK,
        payload: Axios.post('/task/create', newTask)
    }
}
export function editTask(task_id, taskChanges) {
    return {
        type: EDIT_TASK,
        payload: Axios.put(`/task/edit/${task_id}`, taskChanges)
    }
}
export function deleteTask(task_id) {
    return {
        type: DELETE_TASK,
        payload: Axios.delete(`/task/delete/${task_id}`)
    }
}

// Reducer
export default function Reducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) { 
        case `${GET_USER_TASK}_FULFILLED`:
            return {
                ...state,
                tasks: [...payload.data]
            };
        case `${ADD_TASK}_FULFILLED`:
            return {
                ...state,
                tasks: [...payload.data]
            };
        case `${EDIT_TASK}_FULFILLED`:
            return {
                ...state,
                tasks: [...payload.data]
            };
        case `${DELETE_TASK}_FULFILLED`:
            return {
                ...state,
                tasks: [...payload.data]
            };
        default: return state;
    }
}