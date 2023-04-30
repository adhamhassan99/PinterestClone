import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import {ThemeProvider} from 'styled-components';
import {dark, light} from '../theme';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
  const theme = useSelector((state: RootState) => state.theme.value);

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default RootStackNavigator;
