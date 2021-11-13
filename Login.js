import React, { Component } from 'react'
import { Text,TextInput, TouchableOpacity, View ,StyleSheet} from 'react-native'


class Login extends Component {
    render() {
        const{screen,container,text,button,heading}=styles
        return (
            <View style={screen}>
                <Text style={heading}>Login</Text>
                <View style={container}>
                    <TextInput style={text} placeholder='username'/>
                    <TextInput style={text} placeholder='password'/>
                    <TouchableOpacity style={button}>
                      <Text >Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    screen:{
     backgroundColor:'#eda02d',
     flex: 1,
     justifyContent:'center',
     alignItems:'center'
    },
    heading:{
        marginTop:5,
        marginBottom:15,
        fontWeight:'bold',
        fontSize:50,

    },
    container:{
     width:'80%',
     height:250,
     backgroundColor:'#f2d09d',
     elevation:5,
     justifyContent: 'center',
     alignItems:'center',
     padding: 10,
     borderRadius:5


    },
    text:{
        backgroundColor:'#f0dfc7',
        margin:15,
        width:'70%',
        height:40,
        borderRadius:5,

    },
    button:{

        width:'40%',
        backgroundColor:'#dbd7a4',
        height:30,
        marginTop:20,
        elevation:10,
        borderRadius:10,
        padding:5,
        justifyContent:'center',
        alignItems:'center',
      },


})

export default Login