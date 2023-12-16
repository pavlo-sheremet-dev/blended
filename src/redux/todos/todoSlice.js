import { createSlice, nanoid } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'todos',
  storage,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },

  reducers: {
    addTodo: {
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },

      prepare: todo => {
        const id = nanoid();
        return { payload: { id, ...todo } };
      },
    },

    deletetodo: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
      // return {
      //   ...state, items: state.items.filter(item => item.id !== payload)
      // }
    },
  },
});

export const { addTodo, deletetodo } = todoSlice.actions;
export const todoReducer = persistReducer(persistConfig, todoSlice.reducer);
