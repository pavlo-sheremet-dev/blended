import { Container, Grid, GridItem, SearchForm, Todo } from '../components';
import { useSelector } from 'react-redux';
import { selectTodos } from '../redux/todos/selectors';

export const Todos = () => {
  const todos = useSelector(selectTodos);

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
