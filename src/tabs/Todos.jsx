import { useEffect } from 'react';
import { Container, Grid, GridItem, SearchForm, Todo } from '../components';
import { useTodos } from '../hooks/useTodos';
import { useDispatch } from 'react-redux';
import { fetchTodos } from '../redux/todos/operations';

export const Todos = () => {
  const { todos, fetchTodos } = useTodos();

  //   const dispatch = useDispatch();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <Container>
      <SearchForm />
      <Grid>
        {todos.map(({ id, text }, index) => {
          return (
            <GridItem key={id}>
              <Todo id={id} text={text} marker={index + 1} />
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
};
