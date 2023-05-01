import React, {useState, useEffect, useCallback, useRef} from 'react';
import {PersonalizedTopicsHeader} from '../components';
import {useGetImages} from '../hooks/useGetImages';
import Pin from '../components/Pin/Pin';
import {MasonryFlashList} from '@shopify/flash-list';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {setTheme} from '../slices/themeSlice';
import {useDispatch, useSelector} from 'react-redux';
import {StatusBar, ActivityIndicator, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';
import GoogleSignInBtn from '../components/GoogleSignInBtn/GoogleSignInBtn';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native';
import {SignOutGoogle} from '../utilities/GoogleSIgnOut';

const PageContainer = styled.View`
  background-color: ${props => props.theme.colors.backgroundColor};
  flex: 1;
  padding-bottom: 30px;
`;

const IconContainer = styled.Pressable`
  position: absolute;
  right: 20px;
  top: 17px;
  padding: 5px;
  z-index: 20;
`;

const Home = () => {
  const ViewRef = useRef();
  const dispatch = useDispatch();
  const [queryRes, setQueryRes] = useState([]);
  const theme = useTheme();
  const activeTheme = useSelector(state => state.theme.value);
  const navigation = useNavigation();

  const {
    data,
    refetch,
    isRefetching,

    fetchNextPage,
    isFetchingNextPage,
  } = useGetImages();

  useEffect(() => {
    let newArray = [];
    data?.pages.map(item => {
      newArray = [...newArray, ...item.data];
    });
    setQueryRes(newArray);
  }, [data]);

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        shadowColor: 'transparent',
        backgroundColor: theme.colors.backgroundColor,
        paddingHorizontal: 30,
        borderTopWidth: 0,
      },
    });
  }, [activeTheme]);

  const toggleTheme = useCallback(() => {
    try {
      ViewRef?.current
        .fadeOutRightBig()
        .then(() =>
          dispatch(setTheme(activeTheme === 'light' ? 'dark' : 'light')),
        )
        .then(() => ViewRef?.current.fadeInRightBig());
    } catch (error) {
      console.log(error);
    }
  }, [activeTheme, dispatch]);

  console.log(auth().currentUser);

  return (
    // <View style={styles.screenContainer}>
    <>
      <StatusBar
        barStyle={activeTheme === 'light' ? 'dark-content' : 'light-content'}
        backgroundColor={activeTheme === 'light' ? 'white' : 'black'}
      />
      <Button title={'sign out'} onPress={SignOutGoogle} />
      <PageContainer>
        <Animatable.View ref={ViewRef} style={{zIndex: 20}}>
          <IconContainer onPress={toggleTheme}>
            <MaterialCommunityIcons
              name={
                activeTheme === 'light'
                  ? 'moon-waxing-crescent'
                  : 'white-balance-sunny'
              }
              color={activeTheme === 'light' ? 'black' : 'white'}
              size={23}
            />
          </IconContainer>
        </Animatable.View>
        <PersonalizedTopicsHeader />

        <MasonryFlashList
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
        {isFetchingNextPage && (
          <View>
            <ActivityIndicator
              size={30}
              color={activeTheme === 'light' ? 'black' : 'white'}
            />
          </View>
        )}
      </PageContainer>
    </>
    // </View>
  );
};

export default Home;
