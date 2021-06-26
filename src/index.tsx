import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { FlexContainer, LoaderSpinner } from './components/ui';

import './services/firebase';

ReactDOM.render(
  <React.Suspense
    fallback={
      <FlexContainer height={0}>
        <LoaderSpinner size={40} />
      </FlexContainer>
    }
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </React.Suspense>,
  document.getElementById('root')
);
