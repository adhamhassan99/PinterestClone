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
import MasonryList from '@react-native-seoul/masonry-list';

type Props = {};
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Home = (props: Props) => {
  const {data, isLoading, refetch, isRefetching, isError, remove} =
    useGetImages({});

  if (isLoading) return <ActivityIndicator size={60} />;
  if (isError) return <ActivityIndicator size={60} />;

  return (
    <View style={styles.screenContainer}>
      <PersonalizedTopicsHeader />
      <MasonryList
        data={data?.data}
        keyExtractor={(item): string => item.id}
        numColumns={2}
        renderItem={({item}) => (
          <View style={styles.imageContainer}>
            <Image
              resizeMode="cover"
              resizeMethod="auto"
              alt="aa"
              style={{
                width: width / 2 - 15,
                height: undefined,
                aspectRatio: item.width / item.height,
                borderRadius: 12,
              }}
              source={{uri: item?.urls.raw}}
            />
          </View>
        )}
        // refreshing={isLoadingNext}
        onRefresh={() => refetch()}
        // onEndReachedThreshold={0.1}
        // onEndReached={() => loadNext(ITEM_CNT)}
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
    marginHorizontal: 10,
    marginVertical: 12,
  },
});
