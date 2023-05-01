import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import {ThemeProvider} from 'styled-components';
import {dark, light} from '../theme';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import auth from '@react-native-firebase/auth';
import SignedOutStack from '../screens/SignedOutStack';

const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const [isSignedIn, setIsSignedIn] = useState(false);
  function onAuthStateChanged(user) {
    setIsSignedIn(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{headerShown: false, animation: 'none'}}>
          {isSignedIn ? (
            <RootStack.Screen
              name="BottomTabNavigator"
              component={BottomTabNavigator}
            />
          ) : (
            <RootStack.Screen
              name="BottomTabNavigator"
              component={SignedOutStack}
            />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default RootStackNavigator;
