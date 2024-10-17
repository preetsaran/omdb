import React from 'react';
import { Card } from 'react-bootstrap';
import MovieCard from '../MovieCard';

const MovieList = ({ movies, setMovieDetails, setIsLoading }) => {
    return (
        <Card className="h-100" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
            {movies.map(movie => (
                <MovieCard movie={movie} setMovieDetails={setMovieDetails} setIsLoading={setIsLoading} />
            ))}
        </Card>
    );
};

export default MovieList;
