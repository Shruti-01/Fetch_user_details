import React,{Component} from 'react'
import {View,Button, TextInput,StyleSheet} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import LoginContainer from './LoginContainer';
import {Provider} from 'react-redux'
import store from './store'

class Login extends Component{
   
    /*_getUserData=async()=>{
        fetch('https://api.nasa.gov/neo/rest/v1/neo/4771e6e5-9147-48e3-8dce-e0aaf6869380?api_key=J1jZpHxRlRvQi2o8tBpDT5RreoR8wkSyp6bn8Kab',{method:'GET'})
        .then(response=>{
            console.warn(response.data)
        })
        .catch(error=>{
            console.warn(error.message)
        })
    } */

    render(){
        return(
            <Provider store={store}>
            <View >
               {/* <Text style={styles.text}>Login From</Text>
                <TextInput style={styles.input} placeholder="Enter Asteroid ID" 
                onChangeText={(text)=>{this.setState({text:text,disabled:false})}}></TextInput>
                <TextButton title="submit" style={styles.btn} disabled={this.state.disabled} onPress={()=>_getUserData()}/>
                <TextButton title="Random Asteroid" style={styles.btn} />
        */}
             <Button title="move"  onPress={()=>this.props.navigation.navigate('info')} />
     
                <LoginContainer />
                </View>
                </Provider>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:40,
        justifyContent:"center",
        alignItems:"center"
    },
    input:{
        marginTop:40,
        borderBottomColor:"#000",
        borderBottomWidth:2
    },
    text:{
        marginTop:40,
        fontSize:20,
        fontWeight:'bold'
    },
    btn: {
    marginTop:40,
    marginBottom:40
}
})


export default Login