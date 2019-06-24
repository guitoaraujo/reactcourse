import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Header, AlbumList } from './src/components';

const App = () => (
  <View>
    <Header title="Albums" />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
