import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {connect} from 'react-redux'


 class ArticleDetail extends Component {
    render() {
        const {screenStyle,imageStyle,titleStyle,descStyle}=styles
        return (
            <View style={screenStyle}> 
              <View>
                  <Image  source={{uri:this.props.currentArticle[0].thumbnail}} style={imageStyle}/>
              </View>
              <View>
                  <Text style={titleStyle}>{this.props.currentArticle[0].title}</Text>
              </View>
              <View>
                  <Text style={descStyle}>
                      {this.props.currentArticle[0].desc}
                  </Text>
              </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
 screenStyle:{
   backgroundColor:'#f5b62f',
   flex:1
 },
 imageStyle:{
   width:'80%',
   height:250,
   alignSelf:'center',
   borderRadius:5,
   margin:10,
   marginTop:20,
 },
 titleStyle:{
   alignSelf:'center',
   fontFamily:'sans-serif',
   fontWeight:'bold',
   fontSize:30,
   margin:5
 },
 descStyle:{
     alignSelf:'center',
     width:'80%',
     fontSize:20,
     color:'white'


 }
})

const mapStateToProps=state=>{
    return{
        currentArticle:state.reducerListing.currentArticle
    }
}

export default connect(mapStateToProps,{})( ArticleDetail)