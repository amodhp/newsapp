import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Card from './common/Card'

 class FeaturedNews extends Component {
    render() {
        const{item}=this.props
        return (
           <Card item={item} style={{marginVertical:15}}/>
        )
    }
}

const styles=StyleSheet.create({
    container:{

    }
})

export default FeaturedNews