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

function App(): JSX.Element {
  return (
    <>
      <SheetProvider>
        <RootStackNavigator />
      </SheetProvider>
    </>
  );
}

export default App;
