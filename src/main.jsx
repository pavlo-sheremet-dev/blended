import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles, theme } from './styles';
import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
