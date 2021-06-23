import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import HooksProvider from './hooks';

import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';
import { createTheme } from './styles/theme';

function App() {
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <HooksProvider>
            <GlobalStyles />
            <Routes />
          </HooksProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
