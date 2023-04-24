import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Image,
  RefreshControl,
  Button,
  Dimensions,
} from 'react-native';
import React from 'react';
import {PersonalizedTopicsHeader} from '../components';
import {useGetImages} from '../hooks/useGetImages';

type Props = {};
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Home = (props: Props) => {
  const {data, isLoading, refetch, isRefetching, isError} = useGetImages({});

  if (isLoading) return <ActivityIndicator size={60} />;
  if (isError) return <ActivityIndicator size={60} />;

  return (
    <View style={styles.screenContainer}>
      <PersonalizedTopicsHeader />
      {/* <ActivityIndicator size={60} /> */}
      {/* <Button title="refercg" onPress={() => refetch()} /> */}
      <ScrollView
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={() => refetch()}
          />
        }>
        {data?.data.map(item => {
          console.log(item.height);
          return (
            <View
              style={{
                backgroundColor: 'red',
                marginHorizontal: 5,
                marginVertical: 2,
              }}>
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                alt="aa"
                style={{
                  width: width / 2 - 10,
                  height: height / 2 - 60,
                }}
                source={{uri: item?.urls.raw}}
              />
            </View>
          );
        })}
      </ScrollView>
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
