import { useLocation, useParams } from "react-router-dom";
import { SearchForm } from "../components/SearchForm";
import { Section } from "../components/Section";
import { useThemeSwitcher } from "../provider/ThemeSwitcherProvider/useThemeSwitcher";

export const Cocktails = () => {
  const { themeTitle, toggleTheme } = useThemeSwitcher();

  const location = useLocation();
  const params = useParams();

  return (
    <>
      <Section>
        <h1 className=" uppercase text-4xl text-gray-600 text-center show__item">
          Search Cocktails
        </h1>
        <button onClick={toggleTheme}>TOGGLE</button>

        <SearchForm />
      </Section>
    </>
  );
};
