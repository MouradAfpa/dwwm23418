import CardMovie from "../components/CardMovie";

const HomeView = ({ movies }) => {

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center ">
                {movies.map((movie) => <CardMovie key={movie.id} movie={movie} />)}
            </div>
        </>
    )
}

export default HomeView