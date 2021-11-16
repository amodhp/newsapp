import { connect } from 'react-redux';
import React, {Component} from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import CategoryDetail from './common/CategoryDetail';
import SmallCard from './common/SmallCard';
import Title from './common/Title';
import { setCurrentArticle } from '../actions';


class HorizontalList extends Component {
  smallCardDetail=(id,nav)=>{
   this.props.setCurrentArticle(id)
   nav.navigate("Article")
  }

  render() {
    const {list} = styles;
    const {data, title,nav} = this.props;
    return (
      <>
        <Title size={20}>{title}</Title>

        <View style={list}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity onPress={()=>this.smallCardDetail(item.id,nav)} >
                <SmallCard item={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginVertical: 12,
  },
});

export default connect(null,{setCurrentArticle}) (HorizontalList);
