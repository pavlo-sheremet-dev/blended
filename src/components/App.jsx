import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { Layout } from "../layout/Layout/Layout";
import { routes } from "../routes";
import { CocktailDetail, Cocktails, Home } from "../views";

const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: routes.COCKTAILS,
        element: <Cocktails />,
      },
      {
        path: routes.COCKTAIL_ID,
        element: <CocktailDetail />,
      },
      {
        path: "*",
        element: <Navigate to={routes.HOME} />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
