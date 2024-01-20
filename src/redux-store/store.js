import { configureStore } from '@reduxjs/toolkit';
import { todosSlice } from './todos/todosSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'todos',
  storage,
};

const persistedTodosReducer = persistReducer(persistConfig, todosSlice.reducer);

export const store = configureStore({
  reducer: {
    [todosSlice.name]: persistedTodosReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
