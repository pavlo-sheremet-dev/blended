import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/HomePage/HomePage'));
const Movies = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={'/'} />}></Route>
      </Routes>
    </>
  );
};
