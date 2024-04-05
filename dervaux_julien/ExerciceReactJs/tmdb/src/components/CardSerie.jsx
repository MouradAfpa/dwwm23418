import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CardSerie = ({ serie, setSearch, setShowModal }) => {
    const navigate = useNavigate();
    const [isInFavorites, setIsInFavorites] = useState(false);
    
    const handleClick = () => {
        navigate(`/serie/detail/${serie.id}`);
        setShowModal(false); 
        setSearch(''); 
    };

    // Vérifier si la série est dans les favoris lors du chargement initial
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites/serie')) || {};
        setIsInFavorites(favorites[serie.id]);
    }, [serie.id]); // Utilisez serie.id comme dépendance de l'effet pour le recharger lorsque l'identifiant de la série change

    const addFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites/serie')) || {};
        if (!favorites[serie.id]) {
            favorites[serie.id] = serie;
            localStorage.setItem('favorites/serie', JSON.stringify(favorites));
            setIsInFavorites(true); // Mettre à jour l'état pour indiquer que la série est maintenant dans les favoris
            console.log(`Série ajoutée aux favoris : ${serie.name}`);
        } else {
            console.log("La série est déjà dans la liste des favoris.");
        }
    };
    
    const removeFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites/serie')) || {};
        if (favorites[serie.id]) {
            delete favorites[serie.id];
            localStorage.setItem('favorites/serie', JSON.stringify(favorites));
            setIsInFavorites(false); // Mettre à jour l'état pour indiquer que la série n'est plus dans les favoris
            console.log(`Série supprimée des favoris : ${serie.name}`);
        } 
    };

    return (
        <div className="d-flex flex-wrap justify-content-center cardStyle">
            <Card className="m-3 cardStyle">
                <Card.Img 
                    variant="top"
                    onClick={handleClick}
                    src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                    className="img-fluid cardStyle"
                />
                {isInFavorites ? (
                    <img 
                    
                        src="addfav.svg" 
                        alt="Remove from favorites" 
                        className="position-absolute bottom-0 start-50 translate-middle-x m-3 "// Utilisation de position-absolute pour positionner l'icône en bas à droite
                        onClick={removeFavorite}
                    />
                ) : (
                    <img 
                        src="removefav.svg" 
                        alt="Add to favorites" 
                        className="position-absolute bottom-0 start-50 translate-middle-x m-3" // Utilisation de position-absolute pour positionner l'icône en bas au centre
                        onClick={addFavorite}
                    />
                )}
            </Card>
        </div>
    );
};

export default CardSerie;
