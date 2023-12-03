import { NavLink, Link } from "react-router-dom";
import { routes } from "../../routes";
import styles from "./Header.module.css";

import { ThemeSwitcher } from "../../components/ThemeSwitcher";

const menu = [
  { id: "home", name: "home", route: routes.HOME },
  { id: "cocktails", name: "cocktails", route: routes.COCKTAILS },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <Link to={routes.HOME} className={styles.logo}>
          Cocktail App
        </Link>

        <div className="flex items-center gap-6">
          <ThemeSwitcher />
          <nav className={styles.navbar}>
            <ul className={styles.navList}>
              {menu &&
                menu.map(({ id, name, route }) => (
                  <li key={id}>
                    <NavLink
                      to={route}
                      className={({ isActive }) =>
                        `${isActive && styles.activeLink} ${styles.navLink}`
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
