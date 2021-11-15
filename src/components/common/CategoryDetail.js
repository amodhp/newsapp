import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Card from './Card';
import { NavigationContainer } from '@react-navigation/native';
import { setCurrentArticle } from '../../actions';

class CategoryDetail extends Component {

  getArticleDetail=(id)=>{
    this.props.setCurrentArticle(id)
    this.props.navigation.navigate("Article")

  }
  render() {
    const {screen, header, heading, container, imageStyle, listStyle} = styles;
    return (
      <View style={screen}>
        <View style={header}>
          <Text style={heading}>{this.props.currentTitle}</Text>
        </View>
        <View style={listStyle}>
          <FlatList
            data={this.props.currentData}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity onPress={()=>this.getArticleDetail(item.id)}>
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
    backgroundColor: '#fad366',
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
  return {
    currentTitle: state.reducerListing.currentTitle,
    currentData: state.reducerListing.currentData,
  };
};

export default connect(mapStateToProps, {setCurrentArticle})(CategoryDetail);
