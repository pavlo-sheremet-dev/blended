import { useDispatch } from 'react-redux';
import { Text } from '../Text/Text.styled';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine } from 'react-icons/ri';
import { deletetodo } from '../../redux/todos/todoSlice';

export const Todo = ({ text, marker, id }) => {
  const dispatch = useDispatch();

  const onDeleteTodo = () => {
    dispatch(deletetodo(id));
  };

  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{marker}
      </Text>
      <Text>{text}</Text>
      <DeleteButton type="button" onClick={onDeleteTodo}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
    </TodoWrapper>
  );
};
