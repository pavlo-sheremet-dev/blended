import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../components/Layout";
import { HomePage, LoginPage, NotFoundPage, UserPage } from "./lazy";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/user", element: <UserPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes, {
  basename: "/",
  // v7_normalizeFormMethod: true,
});
