import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import "./services/firebase/config";

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
