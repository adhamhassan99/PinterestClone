import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Search, SearchDetail} from '../screens';

const SearchStack = createNativeStackNavigator();
const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator screenOptions={{headerShown: false}}>
      <SearchStack.Screen name="searchHome" component={Search} />
      <SearchStack.Screen name="SearchDetail" component={SearchDetail} />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigator;
