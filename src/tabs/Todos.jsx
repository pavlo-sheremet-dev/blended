import { nanoid } from 'nanoid';
import { Container, Grid, GridItem, SearchForm, Todo } from '../components';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) ?? [],
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = newTodo => {
    setTodos(prevTodos => [...prevTodos, { id: nanoid(), ...newTodo }]);
  };

  const deleteTodo = todoId => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  return (
    <Container>
      <SearchForm addTodo={addTodo} />
      <Grid>
        {todos.map(({ id, text }, index) => {
          return (
            <GridItem key={id}>
              <Todo
                id={id}
                text={text}
                marker={index + 1}
                onDelete={deleteTodo}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
};
