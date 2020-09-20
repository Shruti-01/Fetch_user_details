import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {connect} from 'react-redux'

class Userinfo extends Component{

    render(){
        {console.warn(this.props.userData)}
        return(
            <View style={styles.container}>
                <Text style={styles.header}>User Posts Information</Text>
                <View style={styles.content}>
                    <Text style={styles.thead}>UserId : </Text>
                    <Text style={styles.infoData}>{this.props.userData.users.UserId}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.thead}>Id : </Text>
        <Text style={styles.infoData}>{this.props.userData.users.id}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.thead}>Title : </Text>
        <Text style={styles.infoData}>{this.props.userData.users.title}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.thead}>Body : </Text>
        <Text style={styles.infoData}>{this.props.userData.users.body}</Text>
                </View>
            </View>
        )
    }
}


mapStateToProps=state=>{
    return {
        userData:state
    }
}

const styles=StyleSheet.create({
container:{
    flex:1
},
header:{
    fontSize : 30,
    fontWeight:"bold",
    marginTop:20,
    marginBottom:20
},
content:{
    marginBottom :20,
    marginTop :20,
    flexDirection : "row",
    justifyContent :"center",
    alignItems : "center"

},
thead:{
    marginRight : 20,
    marginLeft: 20,
    color:"#E4401D",
},
infoData:{
    marginLeft:20,
    marginRight:20,
    color:"#51043A"
}
})
export default connect(mapStateToProps,null)(Userinfo)