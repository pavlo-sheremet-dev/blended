import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from './components';

import article from './data/article.json';
import data from './data/data.json';
import forbes from './data/forbes.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard
          poster={article.poster}
          tag={article.tag}
          avatar={article.avatar}
          name={article.name}
          title={article.title}
          postedAt={article.postedAt}
          description={article.description}
        />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics title="Main Statistics" stats={data} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList list={forbes} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory />
      </Container>
    </Section>
  );
};
