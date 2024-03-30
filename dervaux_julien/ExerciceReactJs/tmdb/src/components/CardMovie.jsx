import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CardMovie = ({ movie, handleFavorite, isFavorite }) => {
    const navigate = useNavigate();
    const [isFavorited, setIsFavorited] = useState(isFavorite);

    const toggleFavorite = () => {
        handleFavorite(movie);
        setIsFavorited(!isFavorited);
    };

    return (
        <Card style={{ width: '18rem' }} className="m-3">
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Button variant="primary" onClick={() => navigate(`/detail/${movie.id}`)}>View Detail</Button>
                <Button onClick={toggleFavorite}>
                    {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default CardMovie;
