import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CardMovie = ({ movie, setShowModal, setSearch }) => {
    const navigate = useNavigate();

    return (
        <>
            <Card style={{ width: '18rem', height: "100%" }} className="m-3">
                <Card.Img
                    variant="top"
                    onClick={() => {
                        navigate(`/film/detail/${movie.id}`);
                        setShowModal(false);
                        setSearch('');
                    }}
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    style={{ height: "100%", cursor: "pointer" }}
                />
            </Card>
        </>
    );
}

export default CardMovie;
