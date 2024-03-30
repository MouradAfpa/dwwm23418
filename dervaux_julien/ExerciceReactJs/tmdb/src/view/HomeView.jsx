import CardMovie from "../components/CardMovie";
import Carousel from 'react-bootstrap/Carousel';
import CardSerie from "../components/CardSerie";

const HomeView = ({ movies , popularSeries }) => {
    
    return (
        <>
            <Carousel style={{ width: '80%', margin: 'auto', maxHeight: '500px' }}>
                {movies.map((movie) => (
                    <Carousel.Item key={movie.id}>
                        <img
                            className="d-block w-100"
                            src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
                            alt={movie.title}
                            style={{ maxHeight: '400px', objectFit: 'cover', filter: 'brightness(0.5)'}} // Ajout de styles pour ajuster la taille de l'image
                        />
                        <Carousel.Caption>
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="d-flex flex-wrap justify-content-center">
                <h1>FILM</h1>
                {movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <h1>SERIE</h1>
                {popularSeries.map((serie) => <CardSerie key={serie.id} serie={serie} />)}
            </div>
        </>
    )
}

export default HomeView;
