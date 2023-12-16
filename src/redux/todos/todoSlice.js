import { createSlice, nanoid } from '@reduxjs/toolkit';

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
  },
});

export const { addTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
