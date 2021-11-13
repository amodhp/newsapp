import React, {Component} from 'react';
import { Text, View} from 'react-native';

class Title extends Component {
  render() {
    const {children, numberOfLines = 2, size = 18} = this.props;
    return (
      <Text
        numberOfLines={numberOfLines}
        style={{fontWeight: 'bold', fontSize: size }}>
        {children}
      </Text>
  
    );
  }
}

export default Title;
