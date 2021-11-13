import React, { Component } from 'react'
import { Text, View ,Dimensions,StyleSheet} from 'react-native'
import Card from './Card'


const {width}=Dimensions.get('window')
class SmallCard extends Component {
    render() {
        const {item}=this.props
        return (
          <Card item={item} style={styles.container} imageStyle={styles.image}/>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        width:width/2,
        marginRight:15,
        height:150,
    },
    image:{
        height:'55%'
    }
})


export default SmallCard