import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';

import { AuthProvider, LanguageProvider } from '../hooks';

import { CloseButton as SnackBarCloseButton } from '../components/application';

import i18n from '../services/language';
import { createTheme } from '../styles/theme';

interface Props {
  children: ReactNode;
}

function AppProvider({ children }: Props) {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <LanguageProvider>
          <SnackbarProvider
            autoHideDuration={3500}
            maxSnack={3}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            action={key => <SnackBarCloseButton key={key} />}
          >
            <AuthProvider>{children}</AuthProvider>
          </SnackbarProvider>
        </LanguageProvider>
      </I18nextProvider>
    </ThemeProvider>
  );
}

export default AppProvider;
