import { QueryClientProvider, QueryClient } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';

import CustomTheme from './theme';
import Home from './pages/Home';

import '@fontsource/roboto/400.css';

const client = new QueryClient();

export const App = () => (
  <ChakraProvider theme={CustomTheme}>
    <QueryClientProvider client={client}>
      <Home />
    </QueryClientProvider>
  </ChakraProvider>
);
