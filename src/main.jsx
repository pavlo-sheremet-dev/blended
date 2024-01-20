import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { App } from './App';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles, theme } from './styles';
import { Provider } from 'react-redux';
import { store } from './redux-store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
