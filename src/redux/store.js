import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todos/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
