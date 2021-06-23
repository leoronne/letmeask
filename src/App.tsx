import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import { createTheme } from './styles/theme';

import Routes from './routes';

function App() {
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
