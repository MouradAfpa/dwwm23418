import CardMovie from "../components/CardMovie";
import { CarouselCardSerie, CarouselMovie } from "../components/CarouselMovie";
import { CarouselCardMovie } from "../components/CarouselMovie";
import CardSerie from "../components/CardSerie";

const HomeView = ({ movies, popularSeries }) => {

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center m-2 pb-2 ">
                <CarouselMovie movies={movies} />
            </div>
            <div className="d-flex flex-wrap justify-content-center m-2 pb-2 ">
            <h3>Trending Movies</h3>
                <CarouselCardMovie movies={movies} />
            </div>
            <div className="d-flex flex-wrap justify-content-center m-2 pb-2 ">
            <h3>Trending Series</h3>
                <CarouselCardSerie popularSeries={popularSeries} />
            </div>

            {/* <div className="d-flex flex-wrap justify-content-center">
                <h1>FILM</h1>
                {movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <h1>SERIE</h1>
                {popularSeries.map((serie) => <CardSerie key={serie.id} serie={serie} />)}
            </div> */}
        </>
    )
}

export default HomeView;
