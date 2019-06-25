import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
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
      <CardSection>
        <Button text="Buy it" onPress={() => Linking.openURL(url)} />
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
