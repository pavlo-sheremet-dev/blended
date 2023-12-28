import { Link, NavLink, Outlet } from "react-router-dom";
import css from "./styles.module.css";
import { Suspense } from "react";

export const Component = () => {
  return (
    <div className={css.layoutBox}>
      <header className={css.header}>
        <div className={`${css.container} ${css.flexBox}`}>
          <Link className={css.logo} to="/">
            Logo
          </Link>
          <nav>
            <ul className={`${css.flexBox} ${css.navList}`}>
              <li>
                <NavLink className={css.link} to="/">
                  Home
                </NavLink>
              </li>
              {true && (
                <>
                  <li>
                    <NavLink className={css.link} to="/login">
                      Login
                    </NavLink>
                  </li>
                </>
              )}
              {true && (
                <>
                  <li>
                    <NavLink className={css.link} to="/user">
                      User
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
          {true && <div className={css.user}>{"U"}</div>}
          {true && <button className={css.button}>Log out</button>}
        </div>
      </header>
      <main className={css.main}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <footer className={css.footer}>
        <div className={`${css.container}`}>90 blended - 2023</div>
      </footer>
    </div>
  );
};

export default Component;
