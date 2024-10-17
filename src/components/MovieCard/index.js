import React from 'react';
import { Card } from 'react-bootstrap';
import { fetchMovieDetails } from '../../apis';

const MovieCard = ({ movie: { Poster, Title, Year, Type }, setMovieDetails, setIsLoading }) => {
    const fetchMovieDetailsUtil = async () => {
        try {
            setIsLoading(true)
            const response = await fetchMovieDetails(Title, Year);
            setMovieDetails(response?.data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="h-100" style={{ display: 'flex', flexDirection: 'row'}} onClick={fetchMovieDetailsUtil}>
            <Card.Img
                variant="top"
                src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450"}
                alt={Title}
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
            <Card.Body style={{paddingLeft: '40px'}}>
                <Card.Title>{Title}</Card.Title>
                <Card.Text>Year: {Year}</Card.Text>
                <Card.Text>Type: {Type}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;
