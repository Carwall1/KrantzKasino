import React from 'react';
import ReactDOM from 'react-dom/client';  // for React 18 and above
import './index.css'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
