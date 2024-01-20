import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from '../redux-store/todos/todosSelector';

import * as actions from '../redux-store/todos/todosSlice';

export const useTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const addTodo = todo => dispatch(actions.addTodo(todo));
  const deleteTodo = id => dispatch(actions.deleteTodo(id));

  return { todos, addTodo, deleteTodo };
};
