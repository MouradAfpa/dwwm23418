import {fetchSerieDetails} from '../components/ApiFilm';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardSerie from '../components/CardSerie';


const DetailSerieView = () => {
    
    const { id } = useParams();
    const [detailSerie,setDetailSerie] = useState([]);

    useEffect(() => {
        const fetchDetails = async () => {
            setDetailSerie(await fetchSerieDetails(id));
        };
        fetchDetails();
    }, [id]);
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {detailSerie ? (
                <CardSerie serie={detailSerie} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DetailSerieView;