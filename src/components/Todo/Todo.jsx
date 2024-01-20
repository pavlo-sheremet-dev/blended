import { Text } from '../Text/Text.styled';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useTodos } from '../../hooks/useTodos';

export const Todo = ({ text, marker, id }) => {
  const { deleteTodo } = useTodos();

  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{marker}
      </Text>
      <Text>{text}</Text>
      <DeleteButton type="button" onClick={() => deleteTodo(id)}>
        <RiDeleteBinLine size={24} />
      </DeleteButton>
    </TodoWrapper>
  );
};
