import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={"flex h-screen flex-col bg-slate-50 dark:bg-slate-600"}>
      <Header />

      <main className={"flex-grow bg-gray-100 dark:bg-slate-600"}>
        {<Outlet />}
      </main>

      <Footer />
    </div>
  );
};
