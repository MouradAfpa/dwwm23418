import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from './ApiFilm';
import CardMovie from './CardMovie';

function CarouselTrending() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const responseData = await fetchTrendingMovies();
            setMovies(responseData);
        };
        fetchData();
    }, []);

    return (
        <Carousel>
            {movies.map((movie, index) => (
                <Carousel.Item key={index}>
                    <CardMovie movie={movie} />
                    <Carousel.Caption>
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CarouselTrending;
