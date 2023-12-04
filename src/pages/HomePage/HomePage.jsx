import { MoviesList } from "../../components/MoviesList/MoviesList";
import { fetchTrendingAPI } from "../../helpers/API";
import { useEffect, useState } from "react";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularMoviesRequest = await fetchTrendingAPI();

        setPopularMovies(popularMoviesRequest.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
  return <MoviesList movies={popularMovies} />;
};
export default Home;
