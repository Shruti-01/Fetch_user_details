import React,{Component} from 'react'
import {View,Text} from 'react-native'
import  Userinfo from './Userinfo'
import {Provider} from 'react-redux'
import store from './store'

class UserDetails extends Component{

        
  static navigationOptions = {
    title: 'User App',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf:"center"
    },
  };
  
    render(){
        return(
            <Provider store={store}>
              <Userinfo />
            </Provider>
        )
    }
}

export default UserDetails