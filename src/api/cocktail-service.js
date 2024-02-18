import axios from "axios";
const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
axios.defaults.baseURL = "https://www.thecocktaildb.com/api/json/v1/1";

const urls = Array.from({ length: 12 }, () => BASE_URL);

export const getTrendingCocktails = (signal) => {
    return Promise.all(
        urls.map(async (url) => {
            const { data } = await axios.get(url, { signal: signal });
            const { strDrinkThumb, strDrink, strGlass, idDrink } = data.drinks[0];
            return {
                strDrinkThumb,
                strDrink,
                strGlass,
                idDrink,
            };
        })
    );
};

export const getCocktailDetail = async (id, { signal }) => {
    const { data } = await axios.get(`/lookup.php?i=${id}`, { signal });
    const { strDrink, strDrinkThumb, strAlcoholic, strCategory, strInstructions, strGlass,
        dateModified } =
        data.drinks[0];
    return { strDrink, strDrinkThumb, strAlcoholic, strCategory, strInstructions, strGlass,
        dateModified };
};

export const searchByName = async (query) => {
    const { data } = await axios.get(`/search.php?s=${query}`);
    return data;
};
