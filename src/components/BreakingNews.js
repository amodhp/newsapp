import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Card from './common/Card'
import HorizontalList from './HorizontalList'

 class BreakingNews extends Component {
    render() {
        const {data}=this.props
        return (
          <HorizontalList title='Breaking News' data={data}/>
        )
    }
}

const styles=StyleSheet.create({
    container:{

    }
})

export default BreakingNews