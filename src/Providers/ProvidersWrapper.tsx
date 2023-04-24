import {View, Text} from 'react-native';
import React, {ReactNode} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

type props = {
  children: ReactNode;
};
const queryClient = new QueryClient();

const ProvidersWrapper = ({children}: props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ProvidersWrapper;
