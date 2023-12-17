// import { useTranslation } from "react-i18next";
import { Comments, Hero, Section } from "../components";

export const Home = () => {
  // const { t } = useTranslation();
  return (
    <>
      <Section>
        <Hero
          title="What people are saying."
          subtitle="Feedback from our customers."
        />
        {/* <span>{t("test")}</span> */}
        <Comments />
      </Section>
    </>
  );
};
