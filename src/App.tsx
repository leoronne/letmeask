import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import { createTheme } from './styles/theme';

import Routes from './routes';

const App: React.FC = () => {
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyles />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
