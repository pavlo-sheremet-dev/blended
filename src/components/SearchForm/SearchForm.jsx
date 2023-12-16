import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todos/todoSlice';
import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const text = e.target.text.value.trim();

    dispatch(addTodo({ text }));

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
