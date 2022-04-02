import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  ColorModeScript,
  theme
} from '@chakra-ui/react'


ReactDOM.render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <App />
  </StrictMode>,
  document.getElementById('root')
);