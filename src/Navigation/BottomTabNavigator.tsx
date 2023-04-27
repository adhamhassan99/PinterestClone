/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SheetManager} from 'react-native-actions-sheet/dist/src/sheetmanager';
import HomeStackNavigator from './HomeStackNavigator';

const BottomTabs = createBottomTabNavigator();

const Empty = () => <></>;
const AddButton = (props: any) => (
  <Pressable {...props} onPress={() => SheetManager.show('BottomTabSheet')} />
);

const BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'black',
          paddingHorizontal: 30,
          borderTopWidth: 0,
        },
      }}>
      <BottomTabs.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={({route}) => {
          return {
            tabBarStyle: {display: 'none'},
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="home"
                color={focused ? 'white' : '#5f5f5f'}
                size={30}
              />
            ),
          };
        }}
      />
      <BottomTabs.Screen
        name="home2"
        component={Empty}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="magnify"
              color={focused ? 'white' : '#5f5f5f'}
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
              color={focused ? 'white' : '#5f5f5f'}
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
              color={focused ? 'white' : '#5f5f5f'}
              size={30}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="home4"
        component={Empty}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="account"
              color={focused ? 'white' : '#5f5f5f'}
              size={30}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomTabNavigator;
