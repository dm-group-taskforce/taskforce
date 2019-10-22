import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer'
import characterReducer from './reducers/characterReducer'
import rankReducer from './reducers/rankReducer'
import taskReducer from './reducers/taskReducer'

const rootReducer = combineReducers({
    userReducer,
    characterReducer,
    rankReducer,
    taskReducer
})

export default createStore(rootReducer, applyMiddleware(promise));