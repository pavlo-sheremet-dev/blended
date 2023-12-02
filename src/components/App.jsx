import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout/Layout";
import { routes } from "../routes";
import { CocktailDetail, Cocktails, Home } from "../views";

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.COCKTAILS} element={<Cocktails />} />
        <Route path={routes.COCKTAIL_ID} element={<CocktailDetail />} />
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Route>
    </Routes>
  );
};
