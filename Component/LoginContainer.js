import React,{Component} from 'react'
import {View,Text,Button, TextInput,StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {fetchusers} from './Redux/User/UserAction'

class LoginContainer extends Component{
    constructor(){
        super()
        this.state={
            input:'',
            disabled:true
        }
    }
    _submit(){
        this.props.fetchusers(this.state.input)
        this.props.navigation.navigate('info')
       // console.warn(this.props.userData.users)
    }
    inputData(text){
        if(text != null){
            console.warn(text)
                        
            this.setState({
                input : text,
                disabled: !this.state.disabled})
        }
        else {
            console.warn("Enter Email Id")
        }
    }
    _random(){
       const ran= Math.floor(Math.random() * 5) + 1;
       this.inputData(ran)
       this._submit()
    }

    render(){
        return(
            <View>
                <Text style={styles.header}>Login Page</Text>
                <TextInput style={styles.header}  maxLength={1}
                placeholder="Enter Email-ID"  value={this.state.text}
                onChangeText={(text) => this.inputData(text)} />

                <Button style={styles.btn} 
                onPress={()=>this._submit()}
                
                 title="submit" disabled={this.state.disabled} />
                <Button style={styles.btn} title="random Id" onPress={()=>this._random()}/>
            </View>
        )
    }
}


mapStateToProps=state=>{
    return {
        userData:state
    }
}

const mapStateToDispatch=dispatch=>{
    return{
        fetchusers: (input)=>dispatch(fetchusers(input))
    }
}

const styles=StyleSheet.create({
header:{
    fontSize:20,
    marginTop : 20,
    marginBottom:20,
    fontWeight: "bold",
    alignSelf:"center"
},
theader:{
    flexDirection:"row",
    fontSize:18,

},
btn : {
    marginBottom :20,
    marginTop:20,
}
})

export default connect(mapStateToProps,mapStateToDispatch)(LoginContainer)