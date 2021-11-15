import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {searchBarValueChanged} from '../../actions/ActionList';

class SearchBar extends Component {
  render() {
    const {container, search} = styles;

    return (
      <View style={container}>
        <TextInput
          style={search}
          placeholder="Search"
          onChangeText={value => this.props.searchBarValueChanged(value)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    margin: 10,
    alignSelf: 'center',
    elevation: 2,
  },
  search: {
    width: '80%',
    height: '100%',
    paddingLeft: 6,
    fontSize: 14,
  },
});

const mapStateToProps = state => {
  return {
    search: state.reducerListing.search,
  };
};
export default connect(mapStateToProps, {searchBarValueChanged})(SearchBar);
