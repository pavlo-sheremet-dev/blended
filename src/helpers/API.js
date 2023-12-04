import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: 'ca07cfa0a72b49d166a90c6c0253cddf',
};

export const getMovies = async (endpoint, queryParams = {}) => {
  const response = await axios.get(endpoint, { params: queryParams });
  return response.data;
};

export const fetchTrendingAPI = async () => {
  const endpoint = 'trending/movie/day';
  return await getMovies(endpoint);
};

export const fetchMoviesByNameAPI = async query => {
  const endpoint = `search/movie`;
  return await getMovies(endpoint, { query });
};

export const fetchMovieInfoAPI = async movieId => {
  const endpoint = `movie/${movieId}`;
  return await getMovies(endpoint);
};

export const fetchMovieCastAPI = async movieId => {
  const endpoint = `movie/${movieId}/credits`;
  return await getMovies(endpoint);
};

export const fetchMovieReviewsAPI = async movieId => {
  const endpoint = `movie/${movieId}/reviews`;
  return await getMovies(endpoint);
};
