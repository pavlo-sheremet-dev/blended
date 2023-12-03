import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App";
import "./index.css";
import { ThemeSwitcherProvider } from "./provider/ThemeSwitcherProvider/ThemeSwitcherProvider";

import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  <React.StrictMode>
    <HelmetProvider>
      <ThemeSwitcherProvider>
        <App />
      </ThemeSwitcherProvider>
    </HelmetProvider>
  </React.StrictMode>
  // </BrowserRouter>
);
