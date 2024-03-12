import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail() {
    const movies = useSelector(state => state.Reducer1.result);
    const { id } = useParams();
    const film = movies.find(movie => movie.id === parseInt(id));

    return (
        <>
           
            {film && <img src={`https://image.tmdb.org/t/p/w200${film.poster_path}`} alt="" />}
        </>
    );
}

export default Detail;