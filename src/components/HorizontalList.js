import React, { Component } from 'react'
import { FlatList, Text, View ,StyleSheet} from 'react-native'
import SmallCard from './common/SmallCard'
import Title from './common/Title'

 class HorizontalList extends Component {
    render() {
       const {list}=styles
       const {data,title}=this.props
        return (
            <>
          <Title  size={20}>{title}</Title>
          <View style={list}>
           <FlatList data={data} keyExtractor={item=>item.id} horizontal 
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=><SmallCard item={item}/>}
            />
            </View>
           </>
        )
    }
}

const styles=StyleSheet.create({
    list:{
        marginVertical:12
    }
})

export default HorizontalList