import userReducer from './Redux/User/UserReducer'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'


const Userstore=createStore(userReducer,applyMiddleware(thunk))

export default Userstore