import CardMovie from "../components/CardMovie";
import Carousel from 'react-bootstrap/Carousel';

const HomeView = ({ movies }) => {
    return (
        <>
            <Carousel style={{ width: '80%', margin: 'auto', maxHeight: '500px' }}>
                {movies.map((movie) => (
                    <Carousel.Item key={movie.id}>
                        <img
                            className="d-block w-100"
                            src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
                            alt={movie.title}
                            style={{ maxHeight: '400px', objectFit: 'cover' }} // Ajout de styles pour ajuster la taille de l'image
                        />
                        <Carousel.Caption>
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="d-flex flex-wrap justify-content-center">
                {movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
            </div>
        </>
    )
}

export default HomeView;
