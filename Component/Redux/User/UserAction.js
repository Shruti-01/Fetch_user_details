import {USER_FETCH_REQUEST} from './UserType'
import {USER_FETCH_SUCCESS} from './UserType'
import {USER_FETCH_FAILURE} from './UserType'
//import {USER_BUTTON_DISABLE} from './UserType'
import axois from 'axios'


export const fetchrequest=()=>{
    return{
        type:USER_FETCH_REQUEST,
     
    }
}

const fetchsuccess=users=>{
    return{
        type:USER_FETCH_SUCCESS,
        payload : users
    }
}

const fetchfailue=error=>{
    return{
        type:USER_FETCH_FAILURE,
        payload : error
    }
}

export const fetchusers=input=>{
    var url="https://jsonplaceholder.typicode.com/posts/"+input
    console.warn(url)
    return (dispatch)=>{
        dispatch(fetchrequest())
      
        axois.get(url)
        .then(response=>{
            //response msg
            const user=response.data
            dispatch(fetchsuccess(user))
        })
        .catch(error=>{
            //error msg
            const errMSg=error.message
            dispatch(fetchfailue(errMSg))
        })
    }
}
