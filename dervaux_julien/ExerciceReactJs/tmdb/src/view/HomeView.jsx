import { Carousel } from "react-bootstrap";
import CardMovie from "../components/CardMovie";

const HomeView = ({ movies }) => {

    return (
        <>
            <Carousel />

            <div className="d-flex flex-wrap justify-content-center ">
                {movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
            </div>
        </>
    )
}

export default HomeView