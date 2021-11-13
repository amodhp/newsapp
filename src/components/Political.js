import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Card from './common/Card'
import HorizontalList from './HorizontalList'

 class Political extends Component {
    render() {
        const {data}=this.props
        return (
          <HorizontalList title='Political News' data={data}/>
        )
    }
}

const styles=StyleSheet.create({
    container:{

    }
})

export default Political