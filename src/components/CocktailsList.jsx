import { useCallback, useMemo } from "react";
import { CocktailCard } from "./CocktailCard";
import PropTypes from "prop-types";

export const CocktailsList = ({ cocktails }) => {
  const toggle = useCallback(() => {}, []);

  const items = useMemo(() => {
    console.log("update");
    const sorted = cocktails.sort((a, b) => a - b);
    return sorted;
  }, [cocktails]);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center gap-8">
      {items &&
        items.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} {...cocktail} toggle={toggle} />
        ))}
    </ul>
  );
};

CocktailsList.propTypes = {
  cocktail: PropTypes.object,
};
