import { Comments, Hero, Loader, Section } from "../components";
import { useGetCommentsQuery } from "../redux/commentApi";

export const Home = () => {
  const { isLoading } = useGetCommentsQuery();
  return (
    <>
      <Section>
        <Hero
          title="What people are saying."
          subtitle="Feedback from our customers."
        />
        <Comments />
      </Section>
      {isLoading && <Loader />}
    </>
  );
};
