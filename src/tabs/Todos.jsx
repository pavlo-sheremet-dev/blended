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

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('todos'));
    if (data) {
      this.setState({ todos: data });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.todos !== this.state.todos) {
      const data = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', data);
    }
  }

  addToDo = toDoText => {
    const todo = {
      text: toDoText,
      id: nanoid(),
    };
    this.setState(prevState => {
      return { todos: [...prevState.todos, todo] };
    });
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    return (
      <Container>
        <SearchForm getQuery={this.addToDo} />
        {this.state.todos.length > 0 ? (
          <Grid>
            {this.state.todos.map((todo, index) => {
              return (
                <GridItem key={todo.id}>
                  <Todo
                    description={todo.text}
                    index={index + 1}
                    deleteTodo={() => this.deleteTodo(todo.id)}
                  />
                </GridItem>
              );
            })}
          </Grid>
        ) : (
          <Text textAlign={'center'}>There are no any todos...</Text>
        )}
      </Container>
    );
  }
}
