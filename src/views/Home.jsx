import { CocktailsList } from "../components/CocktailsList";
import { Section } from "../components/Section";
import { Loader } from "../components/Loader";
import { useEffect, useState } from "react";
import { getTrendingCocktails } from "../api/cocktail-service";
import axios from "axios";

export const Home = () => {
    const [cocktails, setCocktails] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
        const controller = new AbortController();

        const fetchCoctails = async () => {
            setLoader(true);
            setError("");
            try {
                const response = await getTrendingCocktails(controller.signal);
                setCocktails(response);
            } catch (error) {
                if (axios.isCancel(error)) return;
                setError(error.message);
            } finally {
                setLoader(false);
            }
        };
        fetchCoctails();
        return () => {
            controller.abort();
        };
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
