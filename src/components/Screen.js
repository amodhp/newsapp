import React, {Children, Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import SearchBar from './common/SearchBar';

import FeaturedNews from './FeaturedNews';

import BreakingNews from './BreakingNews';
import TechNews from './TechNews';
import Entertainment from './Entertainment';
import Political from './Political';
import SearchList from './common/SearchList';
import {connect} from 'react-redux';
import {
  getBreakingNews,
  getTechNews,
  getEntertainmentNews,
  getPoliticalNews,
  setCurrentTitle,
  setCurrentData,
  searchBarValueChanged,
} from '../actions';


class Screen extends Component {
  componentDidMount() {
    this.props.getBreakingNews();
    this.props.getTechNews();
    this.props.getEntertainmentNews();
    this.props.getPoliticalNews();
  }

  callCategoryDetail(heading,category){
   this.props.setCurrentTitle(heading)
   this.props.setCurrentData(category)
   this.props.navigation.navigate("Category")
  }
  
  
  render() {
    const {container,searchList} = styles;
   
    return (
     <View style={container}>
        
        <SearchBar />  
      <ScrollView >
       
    
        <Modal 
        animationType="slide"
        transparent={true}
        visible={this.props.modal_visible}
        onRequestClose={() => {
            this.props.searchBarValueChanged('')
        }}

        >
     
          <SearchList nav={this.props.navigation}/>
    
       
        </Modal>
       
        <FeaturedNews
          item={{
            id: '1',
            title: 'This is the featured news',
            desc: 'Desc of fetured news something blah blah blah',
            thumbnail: 'http://lorempixel.com/400/200/',
          }}
        />
        <TouchableOpacity
          onPress={() => this.callCategoryDetail('Breaking News','breaking-news')}>
          <BreakingNews data={this.props.breakingNews} nav={this.props.navigation}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.callCategoryDetail('Tech News','tech')}>
        <TechNews data={this.props.techNews} nav={this.props.navigation} />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => this.callCategoryDetail('Entertainment News','entertainment')}>
        <Entertainment data={this.props.entertainmentNews} nav={this.props.navigation}/>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => this.callCategoryDetail('Political News','political')}>
        <Political data={this.props.politicalNews} nav={this.props.navigation} />
        </TouchableOpacity>
      </ScrollView>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: '#e8dca0',
    flex: 1,
  },
  searchList:{
    marginTop:200,
  }
});

const mapStateToProps = state => {
  return {
    breakingNews: state.reducerListing.breakingNews,
    techNews: state.reducerListing.techNews,
    entertainmentNews: state.reducerListing.entertainmentNews,
    politicalNews: state.reducerListing.politicalNews,
    filtered_article_List:state.reducerListing.filtered_article_List,
    search:state.reducerListing.search,
    modal_visible:state.reducerListing.modal_visible
  

  };
};

export default connect(mapStateToProps, {
  getBreakingNews,
  getTechNews,
  getEntertainmentNews,
  getPoliticalNews,
  setCurrentTitle,
  setCurrentData,
  searchBarValueChanged,
  
})(Screen);
