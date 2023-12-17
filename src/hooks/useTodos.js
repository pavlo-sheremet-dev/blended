import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from '../redux/todos/selectors';
import * as operations from '../redux/todos/operations';
import { useCallback } from 'react';

export const useTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const addTodo = useCallback(
    todo => dispatch(operations.addTodo(todo)),
    [dispatch],
  );

  const deleteTodo = useCallback(
    id => dispatch(operations.deleteTodo(id)),
    [dispatch],
  );

  const fetchTodos = useCallback(async () => {
    try {
      await dispatch(operations.fetchTodos()).unwrap();
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return { todos, addTodo, deleteTodo, fetchTodos };
};
