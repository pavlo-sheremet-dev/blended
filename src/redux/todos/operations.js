import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const todoApi = axios.create({
  baseURL: 'https://6578a7fef08799dc8045d213.mockapi.io',
});

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await todoApi.get('/todos');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (todo, { rejectWithValue }) => {
    try {
      const { data } = await todoApi.post('/todos', todo);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id, { rejectWithValue }) => {
    try {
      await todoApi.post(`/todos/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
