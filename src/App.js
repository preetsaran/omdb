import React, { useState } from 'react';
import { fetchMovies } from './apis';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import MovieDetailsCard from './components/MovieDetailsCard';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState('');
  const [query, setQuery] = useState('');
  const [queryError, setQueryError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchSearchedMovies = async () => {
    setIsLoading(true);
    if (query) {
      try {
        const response = await fetchMovies(query);
        const error = response.data.Response === "False" ? 'No movie found. Try searching for another title' : ''
        setQueryError(error);
        setMovies(response?.data?.Search || []);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setIsLoading(false);
      }
      return;
    }
    setQueryError('Please enter a movie title to search');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchSearchedMovies();
  };

  const renderMovies = () => {
    if (isLoading) return <h1>Loading...</h1>;
    if (queryError) return <p className="text-center" style={{color: 'red'}}>{queryError || 'No movie found. Try searching for another title.'} </p>;
    if (movies?.length === 0) return <p className="text-center" style={{color: '#0d6efd'}}>{queryError || 'Please enter a movie title to search.'} </p>;
    if (movies.length > 0) return <MovieList movies={movies} setMovieDetails={setMovieDetails} setIsLoading={setIsLoading} />;
    return null;
  }

  if (movieDetails) return <MovieDetailsCard movieDetails={movieDetails} setMovieDetails={setMovieDetails} />
  return (
    <div className="container">
      <h1 className="text-center mt-4">OMDB</h1>
      <form onSubmit={handleSearch} className="my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-3">
          Search
        </button>
      </form>
      <div style={{ padding: '20px' }}>
        {renderMovies()}
      </div>
    </div>
  )
}

export default App;