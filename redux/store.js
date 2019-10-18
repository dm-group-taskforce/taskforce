import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer'
import characterReducer from './reducers/characterReducer'
import rankReducer from './reducers/rankReducer'


const rootReducer = combineReducers({
    userReducer,
    characterReducer,
    rankReducer
})

export default createStore(rootReducer, applyMiddleware(promise));