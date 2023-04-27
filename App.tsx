/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {RootStackNavigator} from './src/Navigation';
import './src/sheets/sheets';
import ProvidersWrapper from './src/Providers/ProvidersWrapper';
import {StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <ProvidersWrapper>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <RootStackNavigator />
    </ProvidersWrapper>
  );
}

export default App;
