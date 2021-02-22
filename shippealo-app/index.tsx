import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { AppProvider } from './src/components/context/AppContext';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root'),
);
