import {View, Text, ImageBackground, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import ExtendedPinFooter from '../ExtendedPinFooter/ExtendedPinFooter';

type Props = {
  uri: string;
};

const ExpandedPin = ({uri}: Props) => {
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground
        resizeMethod="auto"
        source={{uri: uri}}
        imageStyle={styles.imageStyle}
        style={styles.imageBG}>
        <View style={styles.rowBetween}>
          <Pressable onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              color={'white'}
              size={30}
            />
          </Pressable>
          <Pressable onPress={() => {}}>
            <MaterialCommunityIcons
              name="dots-horizontal"
              color={'white'}
              size={30}
            />
          </Pressable>
        </View>
      </ImageBackground>
      <ExtendedPinFooter />
    </>
  );
};

export default ExpandedPin;

const styles = StyleSheet.create({
  imageBG: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageStyle: {
    resizeMode: 'cover',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
});
