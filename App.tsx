/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {RootStackNavigator} from './src/Navigation';
import './src/sheets/sheets';
import ProvidersWrapper from './src/Providers/ProvidersWrapper';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
  return (
    <ProvidersWrapper>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <RootStackNavigator />
    </ProvidersWrapper>
  );
}

export default App;
