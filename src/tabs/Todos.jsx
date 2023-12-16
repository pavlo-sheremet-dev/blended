import { Container, Grid, GridItem, SearchForm, Todo } from '../components';
import { useTodos } from '../hooks/useTodos';

export const Todos = () => {
  const { todos } = useTodos();

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
