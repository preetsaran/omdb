import React from 'react';
import styled from 'styled-components';

const MovieDetailsCard = ({ movieDetails: { Title, Poster, Year, Type, imdbRating, Director, Genre, Language, BoxOffice, Runtime, Rated }, setMovieDetails }) => {
    return (
        <StyledContainerCard>
            <StyledButton onClick={() => setMovieDetails('')}>
                Back
            </StyledButton>
            <StyledCard>
                <StyledCardImg
                    src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450"}
                    alt={Title}
                />
                <StyledCardBody>
                    <StyledCardTitle>{Title}</StyledCardTitle>
                    <StyledCardTitle></StyledCardTitle>
                    <StyledCardText>Year: {Year}</StyledCardText>
                    <StyledCardText>Type: {Type}</StyledCardText>
                    <StyledCardText><span>Imdb Rating:</span> {imdbRating}</StyledCardText>
                    <StyledCardText>Director: {Director}</StyledCardText>
                    <StyledCardText>Genre: {Genre}</StyledCardText>
                    <StyledCardText>Language: {Language}</StyledCardText>
                    <StyledCardText>Box Office: {BoxOffice}</StyledCardText>
                    <StyledCardText>Runtime: {Runtime}</StyledCardText>
                    <StyledCardText>Rated: {Rated}</StyledCardText>
                </StyledCardBody>
            </StyledCard>
        </StyledContainerCard>
    );
};

export default MovieDetailsCard;

const StyledContainerCard = styled.div`
    margin: 20px;
`;

const StyledButton = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 15px;
    margin: 20px;
    max-width: fit-content;
    max-height: 40px;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
        background-color: #0056b3;
    }
`;

const StyledCard = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
    border: none;
    max-width: fit-content;
    height: 100%;
`;

const StyledCardImg = styled.img`
    src: ${(props) => props.src ? props.src : "https://via.placeholder.com/300x450"};
`;

const StyledCardBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
    padding-left: 40px;
`;

const StyledCardTitle = styled.h5`
    flex: 1 1 45%;
    min-width: 250px;
`;

const StyledCardText = styled.p`
    flex: 1 1 45%;
    min-width: 150px;
    gap: 10px;
`;


