import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const todoApi = axios.create({
  baseURL: 'https://6578a7fef08799dc8045d213.mockapi.io/',
});

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { data } = await todoApi.get('todos');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
