import axios from 'axios';

// const API_KEY = 'f22ac2e2868ef156698b62ae7d66a78e';
const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTEyZTAzYjczNTRmODJiODkxNTljYWJlZDMyNjZiZiIsIm5iZiI6MTcyMjk2MjQxNS4zNDk0MzIsInN1YiI6IjY2YjI1MGE0MTQxMWRiNGI5ODNhNGQxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ziMfveHAMj2PlMZziLzRvebh4HxjUu2JOzC0sGv6b2s';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

export const fetchTrandingMovie = async (page) => {
  const res = await axios(
    `${axios.defaults.baseURL}trending/movie/day?page=${page}`,
    options
  );
  return res.data;
};

export const fetchMoviesByQuery = async (query, page) => {
  const res = await axios(
    `${axios.defaults.baseURL}search/movie?query=${query}&page=${page}`,
    options
  );
  return res.data;
};

export const fetchMovieDetailsById = async (movieId) => {
  const res = await axios(`${axios.defaults.baseURL}movie/${movieId}`, options);
  return res.data;
};

export const fetchMovieCreditsById = async (movieId) => {
  const res = await axios(
    `${axios.defaults.baseURL}movie/${movieId}/credits`,
    options
  );
  return res.data.cast;
};

export const fetchMovieReviewsById = async (movieId) => {
  const res = await axios(
    `${axios.defaults.baseURL}movie/${movieId}/reviews`,
    options
  );
  return res.data.results;
};