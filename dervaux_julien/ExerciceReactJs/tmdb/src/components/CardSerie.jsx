import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CardSerie = ({ serie, setSearch, setShowModal }) => {
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-wrap justify-content-center">
        <Card style={{ width: '17rem', height: "100%" }} className="m-3">
            <Card.Img variant="top"
                onClick={() => {
                    navigate(`/serie/detail/${serie.id}`);
                    ()=>setShowModal(false);
                    ()=>setSearch('');
                }}
                src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                style={{ height: "100%", cursor: "pointer" }}
                className="img-fluid"
            />
        </Card>
        </div>
    );
};

export default CardSerie;
