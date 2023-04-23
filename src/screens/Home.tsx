import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {PersonalizedTopicsHeader} from '../components';

type Props = {};

const Home = (props: Props) => {
  return (
    <View style={styles.screenContainer}>
      <PersonalizedTopicsHeader />
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
});
