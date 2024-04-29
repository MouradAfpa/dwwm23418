import React from "react";
import Movie from "./Movie";

function MovieList({ movies, selectMovie }) {
    return (
        <div className={"center-max-size container"}>
            {movies.map(movie => (
                <Movie
                    selectMovie={selectMovie}
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </div>
    );
}

export default MovieList;
