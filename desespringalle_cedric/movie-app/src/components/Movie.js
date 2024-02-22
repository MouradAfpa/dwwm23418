import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MovieDetails from "./MovieDetails";

function Movie({ movie }) {
    const [showDetails, setShowDetails] = useState(false);

    const handleShowDetails = () => setShowDetails(true);
    const handleCloseDetails = () => setShowDetails(false);

    const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/149px-Picture_icon_BLACK.svg.png?20180309172929';

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : placeholderImage;

    return (
        <>
            <Card className="m-4" style={{ width: '18rem' }}>
                <Card.Img
                    variant="top"
                    src={posterUrl}
                    alt={movie.title}
                />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Button variant="primary" onClick={handleShowDetails}>Details</Button>
                </Card.Body>
            </Card>
            <MovieDetails show={showDetails} handleClose={handleCloseDetails} movie={movie} />
        </>
    );
}

export default Movie;