import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
  Text,
  Pressable,
  Share,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  item: any;
};
const width = Dimensions.get('window').width;
const shareOptions = url => {
  return {
    title: 'Share via',
    message: `Hey Check out this picture : \n ${url}`,
    url: 'some share url',
  };
};
const Pin = ({item}: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const openShare = useCallback(
    () =>
      Share.share(shareOptions(item?.urls.regular))
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          err && console.log(err);
        }),
    [],
  );

  if (error) return null;

  return (
    <View style={styles(0, 0).pageContainer}>
      {loading && <ActivityIndicator color={'white'} size={30} />}
      <View style={styles().imageContainer}>
        <Image
          onError={() => setError(true)}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          resizeMode="cover"
          resizeMethod="auto"
          alt="aa"
          style={styles(item.width, item.height).image}
          source={{uri: item?.urls.regular}}
        />
      </View>
      {!loading && (
        <View style={styles().desContainer}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={styles().description}>
            {item.alt_description}
          </Text>
          <Pressable onPress={openShare}>
            <MaterialCommunityIcons
              name="dots-horizontal"
              color={'white'}
              size={20}
            />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Pin;

const styles = (imgWidth = 0, height = 0) =>
  StyleSheet.create({
    pageContainer: {
      marginHorizontal: 10,
      marginVertical: 10,
    },
    imageContainer: {
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
      maxWidth: '80%',
      marginTop: 5,
    },
    desContainer: {
      paddingLeft: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
