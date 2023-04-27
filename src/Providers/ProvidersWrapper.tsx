import React, {ReactNode, useState} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from 'styled-components';
import {light, dark} from '../theme';
import {SheetProvider} from 'react-native-actions-sheet';
import {Provider} from 'react-redux';
import {store} from '../store';

type props = {
  children: ReactNode;
};
const queryClient = new QueryClient();

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    addPlugin({queryClient});
  });
}

const ProvidersWrapper = ({children}: props) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SheetProvider>{children}</SheetProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default ProvidersWrapper;
