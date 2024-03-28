import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";

const CardSerie = ({serie, handleFavorite, isFavorite  }) => {
    const navigate = useNavigate();
    const [isFavorited, setIsFavorited] = useState(isFavorite);

    const handleViewDetail = () => {
        navigate(`/serie/${serie.id}`);
        console.log(serie.id);
    };

    const toggleFavorite = () => {
        handleFavorite(serie); // Passer la série individuelle à la fonction handleFavorite
        setIsFavorited(!isFavorited);
    };

    return (
        <Card style={{ width: '18rem' }} className="m-3">
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} />
            <Card.Body>
                <Card.Title>{serie.name}</Card.Title>
                <Button variant="primary" onClick={handleViewDetail}>View Detail</Button>
                <Button onClick={toggleFavorite}>
                    {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CardSerie;
