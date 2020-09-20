import {USER_FETCH_REQUEST} from './UserType'
import {USER_FETCH_SUCCESS} from './UserType'
import {USER_FETCH_FAILURE} from './UserType'

const initialState={
Loading : false,
users : [],
error : "",
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case USER_FETCH_REQUEST : 
        return{
            ...state,
            Loading : true
        }
        case USER_FETCH_SUCCESS : 
        return{
            Loading :false,
            users : action.payload,
            error : ""
        }
        case USER_FETCH_FAILURE : 
        return{
            Loading :false,
            users :[],
            error : action.payload
        }
        default : return state
    }
}

export default userReducer