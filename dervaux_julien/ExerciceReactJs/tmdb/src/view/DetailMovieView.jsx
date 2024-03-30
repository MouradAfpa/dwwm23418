
import { useParams } from 'react-router-dom';
import { fetchMovieDetails} from '../components/ApiFilm';
import CardMovie from '../components/CardMovie';
import { useEffect, useState } from 'react';

const DetailMovieView = () => {
    
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
        setMovie(await fetchMovieDetails(id)) ;
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

export default DetailMovieView;
