import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
  Text,
} from 'react-native';
import React, {useState} from 'react';

type Props = {
  item: any;
};
const width = Dimensions.get('window').width;

const Pin = ({item}: Props) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles(0, 0).imageContainer}>
      {loading && <ActivityIndicator size={30} />}
      <Image
        onLoadStart={() => setLoading(true)}
        onLoad={() => setLoading(false)}
        resizeMode="cover"
        resizeMethod="auto"
        alt="aa"
        style={styles(item.width, item.height).image}
        source={{uri: item?.urls.raw}}
      />
      {!loading && (
        <Text
          ellipsizeMode="tail"
          numberOfLines={2}
          style={styles(0, 0).description}>
          {item.alt_description}
        </Text>
      )}
    </View>
  );
};

export default Pin;

const styles = (imgWidth, height) =>
  StyleSheet.create({
    imageContainer: {
      // marginHorizontal: 10,
      marginVertical: 10,
      alignItems: 'center',
    },
    image: {
      width: width / 2 - 15,
      height: undefined,
      aspectRatio: imgWidth / height,
      borderRadius: 12,
    },
    description: {
      color: 'white',
      marginHorizontal: 5,
      marginTop: 5,
    },
  });
