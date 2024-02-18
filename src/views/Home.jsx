import { CocktailsList } from "../components/CocktailsList";
import { Section } from "../components/Section";
import { Loader } from "../components/Loader";
import { useEffect, useState } from "react";
import { getTrendingCocktails } from "../api/cocktail-service";

export const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchCoctails = async () => {
      setLoader(true);
      setError("");
      try {
        const response = await getTrendingCocktails();
        setCocktails(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchCoctails();
  }, []);
  return (
    <>
      <Section>
        <h1 className="text-center font-black text-gray-700 text-4xl mb-10">
          Trending cocktails
        </h1>

        <CocktailsList cocktails={cocktails} />
        {loader && <Loader />}
        {error && <p>{error}</p>}
      </Section>
    </>
  );
};
