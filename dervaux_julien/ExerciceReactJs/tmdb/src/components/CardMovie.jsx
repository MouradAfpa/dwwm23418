import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CardMovie = ({ movie, setShowModal, setSearch, setPage, setFavorite}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/film/detail/${movie.id}`);
        setShowModal(false); 
        setSearch('');
    };

    const addFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites/movie')) || {};
        if (!favorites[movie.id]) {
            favorites[movie.id] = movie;
            localStorage.setItem('favorites/movie', JSON.stringify(favorites));
            console.log(`Film ajouté aux favoris : ${movie.title}`);
        } else {
            console.log("Le film est déjà dans la liste des favoris.");
        }
    };
    const removeFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites/movie')) || {};
        if (favorites[movie.id]) {
            delete favorites[movie.id];
            localStorage.setItem('favorites/movie', JSON.stringify(favorites));
            console.log(`Film supprimé des favoris : ${movie.title}`);
        } 
    };

    return (
        <div className="d-flex flex-wrap justify-content-center">
            <Card style={{ width: '17rem', height: "100%" }} className="m-3">
                <Card.Img
                    variant="top"
                    onClick={handleClick}
                    src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
                    style={{ height: "100%", cursor: "pointer" }}
                    className="img-fluid"
                />
                <Button onClick={addFavorite}>ADD</Button>
                <Button onClick={removeFavorite}>REMOVE</Button>
            </Card>
        </div>
    );
}

export default CardMovie;
