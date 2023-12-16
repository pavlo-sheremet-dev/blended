import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useTodos } from '../../hooks/useTodos';

export const SearchForm = () => {
  const { addTodo } = useTodos();

  const handleSubmit = e => {
    e.preventDefault();
    const text = e.target.text.value.trim();

    addTodo({ text });

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
