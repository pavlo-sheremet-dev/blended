import { useDispatch } from 'react-redux';
import { Text } from '../Text/Text.styled';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine } from 'react-icons/ri';
import { deleteTodo } from '../../redux-store/todos/todosSlice';

export const Todo = ({ text, marker, id }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{marker}
      </Text>
      <Text>{text}</Text>
      <DeleteButton type="button" onClick={onDelete}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
    </TodoWrapper>
  );
};
