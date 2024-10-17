import axios from 'axios';

export const fetchMovies = async (query) => {
    const response = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=abfdcc54&s=${query}`
    );
    return response;
  };

export const fetchMovieDetails = async (title, year) => {
    const response = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=abfdcc54&t=${title}&y=${year}`
    );
    return response;
  };