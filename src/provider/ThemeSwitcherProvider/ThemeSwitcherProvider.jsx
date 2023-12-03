import { createContext, useCallback, useState } from "react";
import { Helmet } from "react-helmet-async";

export const ThemeSwitcherContext = createContext({
  themeTitle: "light",
  toggleTheme: () => {},
});

export const ThemeSwitcherProvider = ({ children }) => {
  const [themeTitle, setThemeTitle] = useState("light");

  const toggleTheme = useCallback(
    () => setThemeTitle((prev) => (prev === "light" ? "dark" : "light")),
    []
  );

  return (
    <>
      <Helmet>
        <html lang="en" className={themeTitle} />
      </Helmet>
      <ThemeSwitcherContext.Provider value={{ themeTitle, toggleTheme }}>
        {children}
      </ThemeSwitcherContext.Provider>
    </>
  );
};
