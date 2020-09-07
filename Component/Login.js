import React,{Component} from 'react'
import {View,Text, TextInput,StyleSheet} from 'react-native'
import { TextButton} from 'react-native-material-buttons';


class Login extends Component{
    constructor(){
        super()
        this.state={
            text:"",
            disabled:true
        }
    }
    _getUserData=async()=>{
        fetch('https://api.nasa.gov/neo/rest/v1/neo/4771e6e5-9147-48e3-8dce-e0aaf6869380?api_key=J1jZpHxRlRvQi2o8tBpDT5RreoR8wkSyp6bn8Kab',{method:'GET'})
        .then(response=>{
            console.warn(response.data)
        })
        .catch(error=>{
            console.warn(error.message)
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Login From</Text>
                <TextInput style={styles.input} placeholder="Enter Asteroid ID" 
                onChangeText={(text)=>{this.setState({text:text,disabled:false})}}></TextInput>
                <TextButton title="submit" style={styles.btn} disabled={this.state.disabled} onPress={()=>_getUserData()}/>
                <TextButton title="Random Asteroid" style={styles.btn} />
            </View>
        )
    }
}

con
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