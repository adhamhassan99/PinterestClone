/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SheetManager} from 'react-native-actions-sheet/dist/src/sheetmanager';
import HomeStackNavigator from './HomeStackNavigator';
import {useTheme} from 'styled-components';
import SearchStackNavigator from './SearchStackNavigator';
import {useRoute} from '@react-navigation/native';
import {Profile} from '../screens';

const BottomTabs = createBottomTabNavigator();

const Empty = () => <></>;
const AddButton = (props: any) => (
  <Pressable {...props} onPress={() => SheetManager.show('BottomTabSheet')} />
);

const BottomTabNavigator = () => {
  const route = useRoute();
  console.log(route.name, 'route name');
  const theme = useTheme();
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          shadowColor: 'transparent',
          backgroundColor: theme.colors.backgroundColor,
          paddingHorizontal: 30,
          borderTopWidth: 0,
        },
      }}>
      <BottomTabs.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={({route}) => {
          return {
            // tabBarStyle: {display: 'none'},
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="home"
                color={
                  focused ? theme.colors.iconActive : theme.colors.iconInactive
                }
                size={30}
              />
            ),
          };
        }}
      />
      <BottomTabs.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="magnify"
              color={
                focused ? theme.colors.iconActive : theme.colors.iconInactive
              }
              size={30}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Add"
        component={Empty}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="plus"
              color={
                focused ? theme.colors.iconActive : theme.colors.iconInactive
              }
              size={30}
            />
          ),
          tabBarButton: props => AddButton(props),
        }}
      />
      <BottomTabs.Screen
        name="home3"
        component={Empty}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="chat-processing"
              color={
                focused ? theme.colors.iconActive : theme.colors.iconInactive
              }
              size={30}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="account"
              color={
                focused ? theme.colors.iconActive : theme.colors.iconInactive
              }
              size={30}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomTabNavigator;
