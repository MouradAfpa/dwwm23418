import axios from 'axios';
import React, { useEffect, useState } from 'react';


function Movie() {

    const [film, setFilm] = useState([]);
    const apikey = process.env.REACT_APP_API_KEY;
    console.log(`lol ${apikey}`);

    useEffect(() => {
        const rep = axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apikey}`)
            .then(res => {
                console.log(res.data)
                setFilm(res.data.results);
                // return res.data.results;
            }).catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <img src="https://image.tmdb.org/t/p/w500.jpg" alt="" />
        </div>
    )
}

export default Movie;