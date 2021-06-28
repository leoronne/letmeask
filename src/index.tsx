import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { FlexContainer, LoaderSpinner } from './components/ui';

import './services/firebase';

ReactDOM.render(
  <React.Suspense
    fallback={
      // <body> native margins
      <FlexContainer height="calc(100vh - 16px)">
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
