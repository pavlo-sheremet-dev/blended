import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { addTodo } from '../../redux-store/todos/todosSlice';
import { useDispatch } from 'react-redux';

export const SearchForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const todo = {
      text: e.target.text.value.trim(),
    };
    dispatch(addTodo(todo));
    e.target.reset();
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        placeholder="What do you want to write?"
        name="text"
        required
        autoFocus
      />
    </SearchFormStyled>
  );
};
