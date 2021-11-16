import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Card from './Card';
import { NavigationContainer } from '@react-navigation/native';
import { setCurrentArticle,searchBarValueChanged } from '../../actions';


class SearchList extends Component {

  getArticleDetail=(id,nav)=>{
    this.props.setCurrentArticle(id)
    this.props.searchBarValueChanged('')
    nav.navigate("Article")

  }
  render() {
    const {screen, header, heading, container, imageStyle, listStyle} = styles;
    const {nav}=this.props
    return (
      <View style={screen}>
        <View style={listStyle}>
          <FlatList
            data={this.props.filtered_article_List}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity onPress={()=>this.getArticleDetail(item.id,nav)}>
                <Card
                  item={item}
                  container={container}
                  imageStyle={imageStyle}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    marginTop:120,
    marginBottom:200,
    backgroundColor: 'white',
    width:'80%',
    alignSelf:'center',
    borderRadius:5,
    flex: 1,
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#e0a707',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'IndieFlower-Regular',
    fontSize: 35,
  },
  listStyle: {
    flexDirection: 'column',
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container: {
    width: '70%',
    height: 45,
    marginBottom: 20,
  },
  imageStyle: {
    height: '60%',
  },
});

const mapStateToProps = state => {
    console.log(state)
  return {
    currentTitle: state.reducerListing.currentTitle,
    currentData: state.reducerListing.currentData,
    filtered_article_List:state.reducerListing.filtered_article_List
  };
};

export default connect(mapStateToProps, {setCurrentArticle,searchBarValueChanged})(SearchList);
