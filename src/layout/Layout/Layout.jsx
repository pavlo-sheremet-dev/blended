import React from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { useGetCommentsQuery } from "../../redux/commentApi";
import { Loader } from "../../components";

export const Layout = () => {
    const { isFetching } = useGetCommentsQuery();
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>{<Outlet />}</main>
            <Footer />
            {isFetching && <Loader />}
        </div>
    );
};
