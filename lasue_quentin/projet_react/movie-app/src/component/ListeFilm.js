import React from "react";
import FilmCards from "./CardsFilm";

export default function ListeFilm({movies}){
    return(
        <div>
            {movies.map(movie=>(<FilmCards
                                    key={movie.id}
                                    title={movie.title}
                                    posterPath={movie.poster_path}
                                    />
            ))}
        </div>
    );
}