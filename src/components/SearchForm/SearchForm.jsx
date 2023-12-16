import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ addTodo }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const todo = {
      text: e.target.text.value.trim(),
    };
    addTodo(todo);
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
