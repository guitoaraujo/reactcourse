import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './albumDetail';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    const albums = this.state.albums.map(
      (album, index) => <AlbumDetail key={index} album={album} />
    );
    return (
      <View>
        { albums }
      </View>
    );
  }
}

export default AlbumList;
