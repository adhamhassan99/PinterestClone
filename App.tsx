/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {RootStackNavigator} from './src/Navigation';
import {SheetProvider} from 'react-native-actions-sheet/dist/src/provider';
import './src/sheets/sheets';
import ProvidersWrapper from './src/Providers/ProvidersWrapper';

function App(): JSX.Element {
  return (
    <ProvidersWrapper>
      <SheetProvider>
        <RootStackNavigator />
      </SheetProvider>
    </ProvidersWrapper>
  );
}

export default App;
