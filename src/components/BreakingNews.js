import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import HorizontalList from './HorizontalList'

 class BreakingNews extends Component {
    render() {
        const {data,nav}=this.props
        return (
          <HorizontalList title='Breaking News' nav={nav}data={data}/>
        )
    }
}

const styles=StyleSheet.create({
    container:{

    }
})

export default BreakingNews