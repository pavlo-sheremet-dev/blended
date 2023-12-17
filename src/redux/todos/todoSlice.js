import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, deleteTodo } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = state => {
  state.isLoading = false;
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    error: null,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, handlePending)
      .addCase(addTodo.pending, handlePending)
      .addCase(deleteTodo.pending, handlePending)
      .addCase(fetchTodos.rejected, handleRejected)
      .addCase(addTodo.rejected, handleRejected)
      .addCase(deleteTodo.rejected, handleRejected)
      .addCase(fetchTodos.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteTodo.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(({ id }) => id === payload);
        state.items.splice(index, 1);
      });
  },
  reducers: {},
});

export const todoReducer = todoSlice.reducer;
