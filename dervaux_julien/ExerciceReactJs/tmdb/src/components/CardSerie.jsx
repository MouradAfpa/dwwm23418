import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CardSerie = ({ serie, setSearch, setShowModal }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/serie/detail/${serie.id}`);
        setShowModal(false); 
        setSearch(''); 
    };

    const addFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites/serie')) || {};
        if (!favorites[serie.id]) {
            favorites[serie.id] = serie;
            localStorage.setItem('favorites/serie', JSON.stringify(favorites));
            console.log(`serie ajouté aux favoris : ${serie.title}`);
        } else {
            console.log("La serie est déjà dans la liste des favoris.");
        }
    };

    const removeFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites/serie')) || {};
        if (favorites[serie.id]) {
            delete favorites[serie.id];
            localStorage.setItem('favorites/serie', JSON.stringify(favorites));
            console.log(`serie supprimé des favoris : ${serie.title}`);
        } 
    };

    return (
        <div className="d-flex flex-wrap justify-content-center">
        <Card style={{ width: '17rem', height: "100%" }} className="m-3">
            <Card.Img variant="top"
                onClick={handleClick}
                src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                style={{ height: "100%", cursor: "pointer" }}
                className="img-fluid"
            />
                <Button onClick={addFavorite}>ADD</Button>
                <Button onClick={removeFavorite}>REMOVE</Button>
        </Card>
        </div>
    );
};

export default CardSerie;
