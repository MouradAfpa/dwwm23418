import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useEffect, useState } from 'react';
import PaginationComponent from "./PaginationComponent";

const CardMovie = ({ movie, setShowModal, setSearch, setPage, setFavorite}) => {
    const navigate = useNavigate();

    // État pour suivre si le film est dans les favoris
    const [isInFavorites, setIsInFavorites] = useState(false);

    const handleClick = () => {
        navigate(`/film/detail/${movie.id}`);
        setShowModal(false); 
        setSearch('');
    };

    // Vérifier si le film est dans les favoris lors du chargement initial
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites/movie')) || {};
        setIsInFavorites(favorites[movie.id]);
    }, []);

    const addFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites/movie')) || {};
        if (!favorites[movie.id]) {
            favorites[movie.id] = movie;
            localStorage.setItem('favorites/movie', JSON.stringify(favorites));
            setIsInFavorites(true); // Mettre à jour l'état pour indiquer que le film est maintenant dans les favoris
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
            setIsInFavorites(false); // Mettre à jour l'état pour indiquer que le film n'est plus dans les favoris
            console.log(`Film supprimé des favoris : ${movie.title}`);
        } 
    };

    return (
        <div className="d-flex flex-wrap justify-content-center cardStyle">

            <Card className="m-3 position-relative">
                <Card.Img
                    variant="top"
                    onClick={handleClick}
                    src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
                    className="img-fluid"
                />
                {/* Utiliser la variable d'état pour afficher dynamiquement le lien d'ajout ou de suppression */}
                {isInFavorites ? (
                    <img 
                    
                        src="addfav.svg" 
                        alt="Remove from favorites" 
                        className="position-absolute bottom-0 start-50 translate-middle-x m-3 "// Utilisation de position-absolute pour positionner l'icône en bas à droite
                        onClick={removeFavorite}
                        style={{  }}
                    />
                ) : (
                    <img 
                        src="removefav.svg" 
                        alt="Add to favorites" 
                        className="position-absolute bottom-0 start-50 translate-middle-x m-3" // Utilisation de position-absolute pour positionner l'icône en bas au centre
                        onClick={addFavorite}
                        style={{ cursor: "pointer" }}
                    />
                )}
            </Card>
        </div>
    );
}

export default CardMovie;
