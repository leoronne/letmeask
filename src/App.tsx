import { ThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';

import HooksProvider from './hooks';

import Routes from './routes';

import { CloseButton as SnackBarCloseButton } from './components/application';

import GlobalStyles from './styles/GlobalStyles';
import { createTheme } from './styles/theme';

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        autoHideDuration={1800}
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        action={key => <SnackBarCloseButton key={key} />}
      >
        <HooksProvider>
          <GlobalStyles />
          <Routes />
        </HooksProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
