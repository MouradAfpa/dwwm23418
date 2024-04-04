import { fetchSerieDetails } from '../components/ApiFilm';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import {StarSerieRating} from '../components/StarRating';


const DetailSerieView = () => {

    const { id } = useParams();
    const [detailSerie, setDetailSerie] = useState([]);
    let finalNote = ((detailSerie.vote_average) /2).toFixed(1);

    useEffect(() => {
        const fetchDetails = async () => {
            setDetailSerie(await fetchSerieDetails(id));
        };
        fetchDetails();
    }, [id]);

    return (
        <div className="d-flex flex-wrap justify-content-center bg-black ">
            {detailSerie ? (
                <>
                    <Card style={{ width: '20rem' }} className="border-3 m-3">
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${detailSerie.poster_path}`} />
                    </Card>
                    <Card style={{ width: '30rem' }} className="border-3 m-3">
                        <Card.Body className='bg-dark'>
                            <Card.Title className='text-white'><h1>{detailSerie.name}</h1></Card.Title>
                            <Card.Title className='text-white'>{detailSerie.overview}</Card.Title>
                            <Card.Title className='text-white'>{finalNote}</Card.Title>
                            <StarSerieRating detailSerie={detailSerie}/>

                        </Card.Body>
                    </Card>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DetailSerieView;