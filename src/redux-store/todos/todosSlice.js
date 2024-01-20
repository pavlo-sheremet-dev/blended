import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = { items: [] };

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, { payload }) {
        state.items.push(payload);
      },
      prepare(payload) {
        const id = nanoid();
        return { payload: { id, ...payload } };
      },
    },
  },
});

export const { addTodo } = todosSlice.actions;
