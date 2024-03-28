
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, fetchSerieDetails } from '../components/ApiFilm';
import CardMovie from '../components/CardMovie';
import { useEffect, useState } from 'react';

const DetailView = () => {
    
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const movieDetails = await fetchSerieDetails(id);
            setMovie(movieDetails);
        };
        fetchDetails();
    }, [id]);

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {movie ? (
                <CardMovie movie={movie} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DetailView;
