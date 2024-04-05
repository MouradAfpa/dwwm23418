import { CarouselCardSerie, CarouselMovie } from "../components/CarouselMovie";
import { CarouselCardMovie } from "../components/CarouselMovie";
import Footer from "../components/Footer";

const HomeView = ({ movies, popularSeries }) => {

    return (

        <div className="fullScreen">
            <div className="d-flex flex-wrap justify-content-center  pb-2 ">
                <CarouselMovie movies={movies} />
            </div>
            <div className="d-flex flex-wrap justify-content-center  pb-2 ">
                <CarouselCardMovie movies={movies} />
                <CarouselCardSerie popularSeries={popularSeries} />
            </div>
            <Footer/>
        </div>
    )
}

export default HomeView;
