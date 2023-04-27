import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import ExpandedPin from '../ExpandedPin/ExpandedPin';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {useTheme} from 'styled-components';

type Props = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

const PinDetail = ({route, navigation}: Props) => {
  const theme = useTheme();
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          shadowColor: 'transparent',
          backgroundColor: theme.backgroundColor,
          paddingHorizontal: 30,
          borderTopWidth: 0,
        },
      });
  }, [navigation]);

  return (
    <View style={styles.screenContainer}>
      <ExpandedPin uri={route.params.item.urls.full} />
    </View>
  );
};

export default PinDetail;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
});
