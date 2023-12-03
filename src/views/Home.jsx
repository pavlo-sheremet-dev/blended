import { CocktailsList } from "../components/CocktailsList";
import { Section } from "../components/Section";
import { Loader } from "../components/Loader";
import { useState } from "react";

export const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [] = useState(0);

  return (
    <>
      <Section>
        <h1 className="text-center font-black text-gray-700 text-4xl mb-10">
          Trending cocktails
        </h1>

        {/* <CocktailsList cocktails={cocktails} /> */}
      </Section>
    </>
  );
};
