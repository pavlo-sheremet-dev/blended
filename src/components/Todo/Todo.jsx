import { useTodos } from '../../hooks/useTodos';
import { Text } from '../Text/Text.styled';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine } from 'react-icons/ri';

export const Todo = ({ text, marker, id }) => {
  const { deleteTodo } = useTodos();

  const onDeleteTodo = () => {
    deleteTodo(id);
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
