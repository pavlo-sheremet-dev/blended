import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from '../redux/todos/selectors';
import * as actions from '../redux/todos/todoSlice';

export const useTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const addTodo = todo => {
    dispatch(actions.addTodo(todo));
  };

  const deleteTodo = id => {
    dispatch(actions.deletetodo(id));
  };

  return { todos, addTodo, deleteTodo };
};
