/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  Button,
  View,
} from 'react-native';
import LoginContainer from './Component/LoginContainer'
import {Provider} from 'react-redux'
import store from './Component/store'
import {createStackNavigator} from 'react-navigation-stack'
import UserDetails from './Component/userdetails'
import {createAppContainer} from 'react-navigation'
  
class App extends Component{
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
        <View>
          <LoginContainer name ="shruti" navigation={this.props.navigation} />
        </View>
      </Provider>
    )
  }
}

const screen=createStackNavigator({
  login :App,
  info :UserDetails
},
{
  headerMode:'screen'
});

const Appcont=createAppContainer(screen);
export default Appcont
