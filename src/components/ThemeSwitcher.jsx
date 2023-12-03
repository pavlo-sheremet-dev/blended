import { IoIosSunny, IoIosMoon } from "react-icons/io";

import { useThemeSwitcher } from "../provider/ThemeSwitcherProvider/useThemeSwitcher";

export const ThemeSwitcher = () => {
  const { themeTitle, toggleTheme } = useThemeSwitcher();

  return (
    <button onClick={toggleTheme}>
      {themeTitle === "light" ? (
        <IoIosSunny size={40} />
      ) : (
        <IoIosMoon size={40} />
      )}
    </button>
  );
};
