import React from 'react';
import ListeFilm from "react";
import FilmCards from './CardsFilm';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function AffichageFilms() {
    const [searchVal, setSearchVal] = React.useState('');
    const [movies, setMovies] = React.useState([]);

    const handleInput = async (event) => {
        setSearchVal(event.target.value);
        event.preventDefault();
        try{
        const movies = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchVal}`
        );

        setMovies(movies.data.results);
        }catch(error){
        console.error('Error fetching data: ',error);
        }
    };

    return(
        <>
        <Navbar className="bg-dark justify-content-center" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand> <span className="text-warning fw-bold">Search</span> <i className="text-info">Films</i></Navbar.Brand>
            <Form.Control
            onChange={handleInput}
            value={searchVal}
            type="text"
            placeholder="Rechercher un film"
            className=" mr-sm-2"
            />
        </Container>
        </Navbar>
    
        <div className="conrainer mt-5">
            <div className="row justify-content-center">
                {movies.map((film)=>(
                    <FilmCards key={film.id} movie={film}/>
                ))}
            </div>
        </div>
        </>
    )
}

export default AffichageFilms;