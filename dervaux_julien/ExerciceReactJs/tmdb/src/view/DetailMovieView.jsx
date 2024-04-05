
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../components/ApiFilm';
import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { StarMovieRating } from '../components/StarRating';

const DetailMovieView = () => {


    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    let finalNote = ((movie.vote_average) / 2).toFixed(1);

    useEffect(() => {
        const fetchDetails = async () => {
            setMovie(await fetchMovieDetails(id));
        };
        fetchDetails();
    }, [id]);

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {movie ? (
                <>
                    <Card style={{ width: '20rem' }} className="border-3 m-3">
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    </Card>
                    <Card style={{ width: '30rem' }} className="border-3 m-3">
                        <Card.Body className='bg-dark'>
                            <Card.Title className='text-white'><h1>{movie.title}</h1></Card.Title>
                            <Card.Title className='text-white'>{movie.overview}</Card.Title>
                            <Card.Title className='text-white'>{finalNote}</Card.Title>
                            <StarMovieRating movie={movie} />
                        </Card.Body>
                    </Card>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DetailMovieView;
