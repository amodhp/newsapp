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

class HorizontalList extends Component {


  render() {
    const {list} = styles;
    const {data, title} = this.props;
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
              <TouchableOpacity>
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

export default HorizontalList;
