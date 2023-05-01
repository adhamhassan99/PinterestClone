import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './SignIn';

const SignedOutStackNavigator = createNativeStackNavigator();
const SignedOutStack = () => {
  return (
    <SignedOutStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <SignedOutStackNavigator.Screen name="signInOptions" component={SignIn} />
    </SignedOutStackNavigator.Navigator>
  );
};

export default SignedOutStack;
