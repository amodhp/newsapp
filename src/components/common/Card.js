import React, { Component } from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import Title from './Title'
import Subtitle from './Subtitle'

 class Card extends Component {
    render() {
        const {style,imageStyle,item}=this.props
        const {container,image,contentContainer}=styles
        return (
            <View style={[container,style]}>
               <Image source={{uri:item.thumbnail}} style={[image,imageStyle]}/>
               <View style={contentContainer}>
                   <Title>{item.title}</Title>
                   <Subtitle>{item.desc}</Subtitle>
               </View>

                
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
     width:'100%',
     height:300,
     borderRadius:8,
     overflow:'hidden',
     backgroundColor:'white'
    },
    image:{
        width:'100%',
        height:'65%'
    },
    contentContainer:{
        padding:5,
    }

})

export default Card