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
import {NavigationProp, useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {useTheme} from 'styled-components';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';

type Props = {
  item: any;
};

const PageView = styled.View`
  margin: 10px;
  background-color: ${props => props.theme.colors.backgroundColor};
`;

const DescriptionText = styled.Text`
  color: ${props => props.theme.colors.textColor};
  max-width: 80%;
  margin-top: 5px;
`;

const width = Dimensions.get('window').width;
const shareOptions = url => {
  return {
    title: 'Share via',
    message: `Hey Check out this picture : \n ${url}`,
    url: 'some share url',
  };
};
const Pin = ({item}: Props) => {
  // const theme = useTheme();
  const navigation = useNavigation();
  const [error, setError] = useState(false);
  const activeTheme = useSelector(state => state.theme.value);

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
  // console.log(theme);

  if (error) return null;
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('PinDetail', {
          item,
        })
      }>
      {/* <View style={styles().pageContainer}> */}
      <PageView x={10}>
        <View style={styles().imageContainer}>
          {/* <Image
            onError={() => setError(true)}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            resizeMode="contain"
            resizeMethod="resize"
            alt="aa"
            style={styles(item.width, item.height).image}
            source={{uri: item?.urls.regular}}
          /> */}
          <FastImage
            onError={() => setError(true)}
            resizeMode={FastImage.resizeMode.contain}
            style={styles(item.width, item.height).image}
            source={{
              uri: item?.urls.regular,
              priority: FastImage.priority.normal,
            }}
          />
        </View>

        <View style={styles().desContainer}>
          {/* <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={styles().description}> */}
          <DescriptionText numberOfLines={2}>
            {item.alt_description}
          </DescriptionText>
          {/* </Text> */}
          <Pressable onPress={openShare}>
            <MaterialCommunityIcons
              name="dots-horizontal"
              color={activeTheme === 'light' ? 'black' : 'white'}
              size={20}
            />
          </Pressable>
        </View>
      </PageView>
      {/* </View> */}
    </Pressable>
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
