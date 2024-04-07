import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const CardSerie = ({ serie, setSearch, setShowModal }) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/serie/detail/${serie.id}`);
        setShowModal(false); 
        setSearch(''); 
    };

    return (
        <div className="d-flex flex-wrap justify-content-center cardStyle">
            <Card className="m-1 cardStyle">
                <Card.Img 
                    variant="top"
                    onClick={handleClick}
                    src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                    className="img-fluid cardStyle"
                />
            </Card>
        </div>
    );
};

export default CardSerie;
