import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ title }) => {
  const { textStyles, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyles}>{title}</Text>
    </View>
  );
};
const styles = {
  viewStyle: {
    backgroundColor: '#461220',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  textStyles: {
    color: '#FED0BB',
    fontSize: 20
  }
};
export default Header;
