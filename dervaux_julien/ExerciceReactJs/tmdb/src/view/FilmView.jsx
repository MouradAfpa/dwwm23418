import CardMovie from "../components/CardMovie";

const FilmView = ({ movies, setMovies, handleSearch}) => {

    return (
        <div>
            <h1>Film</h1>
            <div className="d-flex flex-wrap justify-content-center ">
                {movies.map((movie) => (
                    <CardMovie 
                        key={movie.id} 
                        movie={movie} 
                        handleSearch={handleSearch} 
                    />
                ))}
            </div>
        </div>
    );
}

export default FilmView;