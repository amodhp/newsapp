import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'


 class SplashScreen extends Component {
    render() {
        const{textStyle,container,screen,subtextStyle}=styles
        return (
            <View style={screen}>
            <View style={container}>
             <Text style={textStyle}>News App</Text>
             <Text style={subtextStyle}>Latest articles on all topics!</Text>
             </View>
             
          
            </View>

        
        )
    }
}


const styles=StyleSheet.create({
screen:{
    backgroundColor:'#f28130',
    flex:1
},
container:{
 alignSelf:'center',
 backgroundColor:'#f7e5b2',
 width:'70%',
 height:200,
 justifyContent:'center',
 alignItems:'center',
 padding:12,
 marginTop:200,
 borderRadius:35,
 elevation:10,
 
},
textStyle:{
    fontFamily:'IndieFlower-Regular',
    fontSize:50
},
subtextStyle:{
  fontWeight:'bold',
  fontSize:15,
  color:'#96877b'
}
})

export default SplashScreen