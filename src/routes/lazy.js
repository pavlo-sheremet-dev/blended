import { lazy } from "react";

export const HomePage = lazy(() => import("../pages/HomePage"));
export const LoginPage = lazy(() => import("../pages/LoginPage"));
export const UserPage = lazy(() => import("../pages/UserPage"));
export const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
