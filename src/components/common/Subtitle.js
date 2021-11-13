import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Subtitle extends Component {
  render() {
      
    const {children, numberOfLines = 2, size = 14} = this.props;
    return (
      <Text numberOfLines={numberOfLines} style={{fontSize: size}}>
        {children}{' '}
      </Text>
    );
  }
}

export default Subtitle;
