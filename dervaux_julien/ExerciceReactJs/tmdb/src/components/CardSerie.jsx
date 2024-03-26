import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CardSerie = ({ serie }) => {
    const navigate = useNavigate();

    const handleViewDetail = () => {
        navigate(`/detail/${serie.id}`);
    };

    return (
        <Card style={{ width: '18rem' }} className="m-3">
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} />
            <Card.Body>
                <Card.Title>{serie.name}</Card.Title>
                <Button variant="primary" onClick={handleViewDetail}>View Detail</Button>
            </Card.Body>
        </Card>
    );
};

export default CardSerie;
