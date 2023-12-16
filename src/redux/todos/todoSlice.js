import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchTodos } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
// const handleRejected = () => {
//   state.isLoading = false;
// };

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
      .addCase(fetchTodos.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(fetchTodos.rejected, (state, { error }) => {
        state.error = error.message;
      });
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
export const todoReducer = todoSlice.reducer;
