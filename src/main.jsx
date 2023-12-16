import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { App } from './App';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles, theme } from './styles';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
