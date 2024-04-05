import CardMovie from "../components/CardMovie";
import PaginationComponent from "../components/PaginationComponent";

const FilmView = ({ movies, handleSearch, setFavorite, favorite, page, setPage }) => {
    return (
        <div>
            <div className="d-flex justify-content-center ">
                <PaginationComponent
                    movies={movies}
                    page={page}
                    setPage={setPage}
                />
            </div>
            <div className="d-flex justify-content-center ">
            <h1>Film</h1>
            </div>
            <div className="d-flex flex-wrap justify-content-center ">
                {movies.map((movie) => (
                    <CardMovie
                        key={movie.id}
                        movie={movie}
                        handleSearch={handleSearch}
                        favorite={favorite}
                        setFavortie={setFavorite}
                    />
                ))}
            </div>
        </div>
    );
}

export default FilmView;