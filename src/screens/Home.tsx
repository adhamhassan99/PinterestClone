import {View, StyleSheet, Image, RefreshControl, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import {PersonalizedTopicsHeader} from '../components';
import {useGetImages} from '../hooks/useGetImages';
import Pin from '../components/Pin/Pin';
import {MasonryFlashList} from '@shopify/flash-list';
import styled from 'styled-components/native';

const PageContainer = styled.View`
  background-color: ${props => props.theme.colors.backgroundColor};
  flex: 1;
`;

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
    // <View style={styles.screenContainer}>
    <PageContainer>
      <PersonalizedTopicsHeader />

      <MasonryFlashList
        decelerationRate={'fast'}
        data={queryRes}
        numColumns={2}
        renderItem={({item}) => <Pin item={item} />}
        estimatedItemSize={284}
        refreshing={isRefetching}
        onRefresh={() => refetch()}
        onEndReachedThreshold={0.1}
        onEndReached={() => fetchNextPage()}
      />
    </PageContainer>
    // </View>
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
