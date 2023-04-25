import {View, StyleSheet, Image, RefreshControl, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import {PersonalizedTopicsHeader} from '../components';
import {useGetImages} from '../hooks/useGetImages';
import MasonryList from '@react-native-seoul/masonry-list';
import Pin from '../components/Pin/Pin';
const Home = () => {
  const [queryRes, setQueryRes] = useState([]);

  const {
    data,
    refetch,
    isRefetching,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    hasPreviousPage,
    fetchPreviousPage,
  } = useGetImages();

  // if (isLoading) return <ActivityIndicator size={60} />;
  // if (isError) return <ActivityIndicator size={60} />;

  useEffect(() => {
    let newArray = [];
    data?.pages.map(item => {
      newArray = [...newArray, ...item.data];
    });
    setQueryRes(newArray);
  }, [data]);

  return (
    <View style={styles.screenContainer}>
      <PersonalizedTopicsHeader />
      <MasonryList
        data={queryRes}
        keyExtractor={(_, index): string => index}
        numColumns={2}
        renderItem={({item}) => <Pin item={item} />}
        refreshing={isRefetching}
        onRefresh={() => refetch()}
        onEndReachedThreshold={0.1}
        onEndReached={() => fetchNextPage()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
  imageContainer: {
    // marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
});
