import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  Container,
  Grid,
  GridItem,
  SearchForm,
  Text,
  Todo,
} from '../components';

export class Todos extends Component {
  state = {
    todos: [],
  };

  addToDo = toDoText => {
    const todo = {
      text: toDoText,
      id: nanoid(),
    };
    this.setState(prevState => {
      return { todos: [...prevState.todos, todo] };
    });
  };

  render() {
    return (
      <Container>
        <SearchForm getQuery={this.addToDo} />
        <Text textAlign={'center'}>There are no any todos...</Text>
      </Container>
    );
  }
}
