import React from 'react'
import {
  ChakraProvider,
  Text,
  Box,
  Container
} from '@chakra-ui/react'
import Fonts from './components/fonts'
import theme from './theme/theme'
import './App.css'
import Header from './components/header'
import DashboardMain from './components/main_dashboard'
import Overview from './components/overview'
import social_media from './data_1'
import sm_details from './data_2'
 

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Container maxW="container.lg">
        <Header />
        <DashboardMain dataItems = {social_media} />
        <Overview dataItems = {sm_details}/>
      </Container>
    </ChakraProvider>
  );
}

export default App;
