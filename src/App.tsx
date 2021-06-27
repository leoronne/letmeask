import AppProvider from './providers';
import Routes from './routes';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <AppProvider>
      <GlobalStyles />
      <Routes />
    </AppProvider>
  );
}

export default App;
