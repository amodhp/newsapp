import React, {Children, Component} from 'react';
import {Text, View, StyleSheet,ScrollView} from 'react-native';
import SearchBar from './common/SearchBar';

import FeaturedNews from './FeaturedNews';
import SmallCard from './common/SmallCard';
import BreakingNews from './BreakingNews';
import data from '../FakeData';
import TechNews from './TechNews';
import Entertainment from './Entertainment';
import Political from './Political';

class Screen extends Component {
  render() {
    const {container} = styles;
    const breakingNews = data.filter(item => item.category === 'breaking-news');
    const techNews = data.filter(item => item.category === 'tech');
    const entertainmentNews = data.filter(item => item.category === 'entertainment');
    const politicalNews = data.filter(item => item.category === 'political');
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
        <BreakingNews data={breakingNews} />
        <TechNews data={techNews}/>
         <Entertainment data={entertainmentNews}/>
         <Political data={politicalNews}/>
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

export default Screen;
