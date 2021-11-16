import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Card from './common/Card'
import HorizontalList from './HorizontalList'

 class Entertainment extends Component {
    render() {
        const {data,nav}=this.props
        return (
          <HorizontalList title=' Entertainment News' data={data} nav={nav}/>
        )
    }
}

const styles=StyleSheet.create({
    container:{

    }
})

export default Entertainment