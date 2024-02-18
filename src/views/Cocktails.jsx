import { SearchForm } from "../components/SearchForm";
import { Section } from "../components/Section";
import { CocktailsList } from "../components/CocktailsList";
import { Loader } from "../components/Loader";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchByName } from "../api/cocktail-service";

export const Cocktails = () => {
    const [cocktails, setCocktails] = useState([]);
    const [params] = useSearchParams();
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const query = params.get("query");
        if (!query) return;
        const fetchCoctails = async () => {
            setLoader(true);
            setError("");
            try {
                const response = await searchByName(query);
                setCocktails(response.drinks);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoader(false);
            }
        };
        fetchCoctails();
    }, [params]);

    return (
        <>
            <Section>
                <h1 className="uppercase text-4xl text-gray-600 text-center">Search Cocktails</h1>
                <SearchForm />
                <CocktailsList cocktails={cocktails} />
                {loader && <Loader />}
                {error && <p>{error}</p>}
            </Section>
        </>
    );
};
