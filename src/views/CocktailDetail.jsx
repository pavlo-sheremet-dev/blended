import { Section } from "../components/Section";
import { Loader } from "../components/Loader";
import { GoBackBtn } from "../components/GoBackBtn";
import { CocktailInfo } from "../components/CocktailInfo";
import { Link, Route, useLocation, useParams } from "react-router-dom";
import { routes } from "../routes";
import { useEffect, useRef, useState } from "react";
import { getCocktailDetail } from "../api/cocktail-service";
import axios from "axios";

export const CocktailDetail = () => {
    const { cocktailId } = useParams();
    const [cocktailData, setCocktailData] = useState(null);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");

    const location = useLocation();

    const backLink = useRef(location.state?.from ?? "/");
    useEffect(() => {
        const controller = new AbortController();

        const fetchCoctails = async () => {
            setLoader(true);
            setError("");
            try {
                const response = await getCocktailDetail(cocktailId, { signal: controller.signal });
                setCocktailData(response);
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
    }, [cocktailId]);
    return (
        <Section>
            <h1 className="uppercase text-4xl text-gray-600 text-center">Cocktail details</h1>
            <GoBackBtn path={backLink.current} />
            {cocktailData && <CocktailInfo {...cocktailData} />}
            {loader && <Loader />}
            {error && <p>{error}</p>}
        </Section>
    );
};
