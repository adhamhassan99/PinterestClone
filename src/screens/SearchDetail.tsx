import {View, Pressable, ActivityIndicator, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  NavigationProp,
  RouteProp,
  StackActions,
} from '@react-navigation/native';
import {useTheme} from 'styled-components';
import {SearchContainer, SearchBar, Row} from './Search';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useGetSearchImages} from '../hooks/useGetSearchImages';
import {MasonryFlashList} from '@shopify/flash-list';
import Pin from '../components/Pin/Pin';

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
};

const SearchDetail = (props: Props) => {
  const [queryString, setQueryString] = useState(
    props.route.params.queryString,
  );
  const [fetchEnabled, setFetchEnabled] = useState(true);
  const [queryRes, setQueryRes] = useState([]);
  const theme = useTheme();

  const {data, isRefetching, refetch, fetchNextPage, isInitialLoading} =
    useGetSearchImages(queryString, true, {
      onSuccess: () => {
        setFetchEnabled(false);
      },
    });

  useEffect(() => {
    let newArray = [];
    data?.pages.map(item => {
      console.log(item, 'item');
      newArray = [...newArray, ...item.data.results];
    });
    setQueryRes(newArray);
    data?.pages.map(item => console.log({item}));
  }, [data]);

  useEffect(() => {
    props.navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });

    return () => {
      props.navigation.getParent()?.setOptions({
        tabBarStyle: {
          shadowColor: 'transparent',
          backgroundColor: theme.colors.backgroundColor,
          paddingHorizontal: 30,
          borderTopWidth: 0,
        },
      });
    };
  }, [props.navigation, theme]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Row style={{alignItems: 'center', paddingRight: 10}}>
        <Pressable
          onPress={() => props.navigation.dispatch(StackActions.popToTop())}>
          <MaterialCommunityIcons
            name="chevron-left"
            color={theme.colors.textColor}
            size={30}
            style={{marginBottom: 5, paddingHorizontal: 10}}
          />
        </Pressable>
        <SearchContainer style={{flex: 1, marginTop: 0}}>
          <SearchBar
            onSubmitEditing={({nativeEvent: {text}}) =>
              text && setQueryString(text)
            }
            defaultValue={queryString}
            // onChangeText={setQueryString}
          />
        </SearchContainer>
      </Row>
      {isInitialLoading ? (
        <ActivityIndicator />
      ) : (
        <MasonryFlashList
          ListEmptyComponent={() => <Text>empty</Text>}
          decelerationRate={'fast'}
          data={queryRes}
          numColumns={2}
          renderItem={({item}) => <Pin item={item} />}
          estimatedItemSize={284}
          refreshing={isRefetching}
          onRefresh={() => refetch()}
          onEndReachedThreshold={0.6}
          onEndReached={() => fetchNextPage()}
        />
      )}
    </View>
  );
};

export default SearchDetail;
