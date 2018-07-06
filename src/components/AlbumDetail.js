import React from 'react';
import
{
  Text,
  View,
  Image,
  Linking,

} from 'react-native';

import Card from './Card';
import CardDetail from './CardDetail';
import Button from './Button';

const AlbumDetail = ({ album }) => (
  <Card>
    <CardDetail>
      <View style={styles.thumbnailContainerStyle}>
        <Image
          style={styles.thumbnailStyle}
          source={{ uri: album.thumbnail_image }}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.textTitle}>{album.title}</Text>
        <Text>{album.artist}</Text>
      </View>
    </CardDetail>
    <CardDetail>
      <Image
        source={{ uri: album.image }}
        style={styles.artworkImage}
      />
    </CardDetail>
    <CardDetail>
      <Button onPress={() => Linking.openURl(album.url)}>
        Buy Now
      </Button>
    </CardDetail>
  </Card>
);

export default AlbumDetail;

const styles = {
  textView: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  textTitle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  artworkImage: {
    height: 300,
    flex: 1,
    width: null
  }
};
