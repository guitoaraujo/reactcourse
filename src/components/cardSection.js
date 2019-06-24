import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  <View style={styles.container}>{props.children}</View>
);

const styles = {
  container: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};
export default CardSection;
