import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer'
import characterReducer from './reducers/characterReducer'
import rankReducer from './reducers/rankReducer'
import taskReducer from './reducers/taskReducer'
import chartReducer from './reducers/chartReducer'

const rootReducer = combineReducers({
    userReducer,
    characterReducer,
    rankReducer,
    taskReducer,
    chartReducer
})

export default createStore(rootReducer, applyMiddleware(promise));