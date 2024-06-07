import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CardMovie = ({movie}) => {
    const navigate = useNavigate();

    return (
        <Card style={{ width: '18rem' }} className="m-3">
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Button variant="primary" onClick={() => navigate(`/film/detail/${movie.id}`)}>View Detail</Button>
            </Card.Body>
        </Card>
    );
}

export default CardMovie;
