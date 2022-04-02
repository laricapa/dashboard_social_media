import React from 'react'
import {
  ChakraProvider,
  Text,
  Box,
  Container
} from '@chakra-ui/react'
import Fonts from './components/fonts'
import theme from './theme/theme'
import './App.css';
import Header from './components/header'
import Switcher from './components/switcher'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Container maxW="container.lg">
        <Header />
        <Switcher />
      </Container>
    </ChakraProvider>
  );
}

export default App;
