import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './card';
import CardSection from './cardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const { text, textContainer, thumb, thumbContainer, cover } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbContainer}>
          <Image source={{ uri: thumbnail_image }} style={thumb} />
        </View>
        <View style={textContainer}>
          <Text style={text}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: image }} style={cover} />
      </CardSection>
    </Card>
  );
};

const styles = {
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 18
  },
  thumbContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumb: {
    width: 50,
    height: 50
  },
  cover: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
