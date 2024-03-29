
import { useParams } from 'react-router-dom';
import { fetchMovieDetails} from '../components/ApiFilm';
import CardMovie from '../components/CardMovie';
import { useEffect, useState } from 'react';

const DetailMovieView = () => {
    
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const movieDetails = await fetchMovieDetails(id);
            setMovie(movieDetails);
        };
        fetchDetails();
    }, [id]);
    console.log(movie);

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

export default DetailMovieView;
