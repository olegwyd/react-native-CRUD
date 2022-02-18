import React from 'react';
import { SafeAreaView } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

import StackNavigator from './src/navigation/StackNavigator';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <StackNavigator />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
