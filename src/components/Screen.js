import React, {Children, Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SearchBar from './common/SearchBar';

import FeaturedNews from './FeaturedNews';

import BreakingNews from './BreakingNews';
import TechNews from './TechNews';
import Entertainment from './Entertainment';
import Political from './Political';
import {connect} from 'react-redux';
import {
  getBreakingNews,
  getTechNews,
  getEntertainmentNews,
  getPoliticalNews,
  setCurrentTitle,
  setCurrentData,
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
    const {container} = styles;
    return (
      <ScrollView style={container}>
        <SearchBar />
       
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
          <BreakingNews data={this.props.breakingNews} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.callCategoryDetail('Tech News','tech')}>
        <TechNews data={this.props.techNews} />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => this.callCategoryDetail('Entertainment News','entertainment')}>
        <Entertainment data={this.props.entertainmentNews} />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => this.callCategoryDetail('Political News','political')}>
        <Political data={this.props.politicalNews} />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: '#e8dca0',
    flex: 1,
  },
});

const mapStateToProps = state => {
  return {
    breakingNews: state.reducerListing.breakingNews,
    techNews: state.reducerListing.techNews,
    entertainmentNews: state.reducerListing.entertainmentNews,
    politicalNews: state.reducerListing.politicalNews,
    filtered_article_List:state.reducerListing.filtered_article_List,
    search:state.reducerListing.search
  

  };
};

export default connect(mapStateToProps, {
  getBreakingNews,
  getTechNews,
  getEntertainmentNews,
  getPoliticalNews,
  setCurrentTitle,
  setCurrentData,
  
})(Screen);
