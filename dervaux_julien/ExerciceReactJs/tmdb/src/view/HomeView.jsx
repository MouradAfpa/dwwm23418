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
                <CarouselCardMovie movies={movies} />
            </div>
            <div className="d-flex flex-wrap justify-content-center m-2 pb-2 ">
                <CarouselCardSerie popularSeries={popularSeries} />
            </div>
        </>
    )
}

export default HomeView;
