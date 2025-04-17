import React from 'react';
import AppRouter from './routes/AppRouter';
import { AuthProvider } from './context/AuthProvider';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
