import React from 'react';
import dotenv from 'dotenv';

import './styles/globalStyle.css';
import { ThemeProvider } from 'styled-components';
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';

import Routes from './routes';

dotenv.config();

const App: React.FC = () => (
  <StylesProvider>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
          <Routes />
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

export default App;
