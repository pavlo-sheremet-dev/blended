import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    name: '',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getQuery(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
          onChange={this.handleChange}
          value={this.state.name}
        />
      </SearchFormStyled>
    );
  }
}
