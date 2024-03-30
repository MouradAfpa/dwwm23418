
import { useParams } from 'react-router-dom';
import {fetchSerieDetails } from '../components/ApiFilm';
import { useEffect, useState } from 'react';
import CardSerie from '../components/CardSerie';

const DetailSerieView = () => {
    
    const { id } = useParams();
    const [serie, setSerie] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const serieDetails = await fetchSerieDetails(id);
            setSerie(serieDetails);
        };
        fetchDetails();
    console.log("ici" + serie);

    }, [id]);
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {serie ? (
                <CardSerie serie={serie} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DetailSerieView;
