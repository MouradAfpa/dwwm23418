import React, { useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import FilmCards from './CardsFilm';
import ListeFilm from './ListeFilm';



function AffichageFilms() {
    const [searchVal, setSearchVal] = React.useState('');
    const [movies, setMovies] = React.useState([]);
    const [pageActuelle,setPage] = React.useState(1);

    const handleInput = async (event) => {
        setSearchVal(event.target.value);
        
        try{
        const movies = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchVal}&page=${pageActuelle}`
        );

        setMovies(movies.data.results);
        }catch(error){
        console.error('Error fetching data: ',error);
        }
    };

    useEffect(()=>{
        try{
            const movie = axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchVal}&page=${pageActuelle}`
            );
    
            setMovies(movie.data.results);
            }catch(error){
            console.log('Error fetching data: ',error);
            }
    },[pageActuelle,searchVal])

    const nextPage = () => {
        setPage(pageActuelle + 1);
        
    };

    const previousPage = () => {
        if (pageActuelle > 1) {
            setPage(pageActuelle - 1);
            
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
    
        <div className="container mt-5">
            <div className="row justify-content-center">
                {movies.length ===0  ?
                (<ListeFilm/>):
                (
                movies.map((film)=>(
                <FilmCards key={film.id} movie={film}/>))
                ) }
            </div>
            <div className='row'>
                <div className='col'>
                <Button variant="outline-info" onClick={previousPage} size='lg'>Page précédente</Button>
                </div>
                <div className='col'>
                <Button variant="outline-info" onClick={nextPage} size='lg'>Page suivante</Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default AffichageFilms;