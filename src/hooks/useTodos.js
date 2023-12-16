import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from '../redux/todos/selectors';
import * as actions from '../redux/todos/todoSlice';
import * as operations from '../redux/todos/operations';
import { useCallback } from 'react';

export const useTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const addTodo = todo => {
    dispatch(actions.addTodo(todo));
  };

  const deleteTodo = id => {
    dispatch(actions.deletetodo(id));
  };

  const fetchTodos = useCallback(async () => {
    try {
      await dispatch(operations.fetchTodos()).unwrap();
    } catch (error) {
      alert(`${error.message}`);
      console.log(error.message);
    }
  }, [dispatch]);

  return { todos, addTodo, deleteTodo, fetchTodos };
};
