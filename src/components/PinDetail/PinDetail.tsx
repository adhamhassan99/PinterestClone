import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import ExpandedPin from '../ExpandedPin/ExpandedPin';
import {RouteProp} from '@react-navigation/native';

type Props = {
  route: RouteProp<any>;
};

const PinDetail = ({route}: Props) => {
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
