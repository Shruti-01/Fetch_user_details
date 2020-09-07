/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
 
} from 'react-native';
import Login from './Component/Login'

class App extends Component{
  render(){
    return(
      <View>
        <Login />
      </View>
    )
  }
}
export default App;
