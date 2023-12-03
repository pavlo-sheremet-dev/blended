import { useContext } from "react";
import { ThemeSwitcherContext } from "./ThemeSwitcherProvider";

export const useThemeSwitcher = () => useContext(ThemeSwitcherContext);
