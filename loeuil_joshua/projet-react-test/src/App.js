import React,{useState,useEffect} from 'react';
import './App.css';
import CardFilm from './Moviesearch/Composant/cardFilm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';
import axios from 'axios';



const api_key = process.env.REACT_APP_API_KEY;
const API_URL=`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
const API_SEARCH=`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query`;


function App() {

  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');

  useEffect(() => {
    axios.get(API_URL)
    .then((res) => {
      setMovies(res.data.results);
    })
  }, [])


  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`${API_SEARCH}${query}`;
      const res= await axios.get(url);
      setMovies(res.data.results);
    }
    catch(e){
      console.log(e);
    }
  };

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/home">TMDB</Navbar.Brand>
        <Navbar.Brand href="/home">Truc à voir</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="nabarScroll">
            <Nav 
            className="me-auto my-2 my-lg-3"
            style={{maxHeight:'100px'}}
            navbarScroll></Nav>

            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
              type="search"
              placeholder="Recherche"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></FormControl>
              <Button variant="success" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      {movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <CardFilm key={movieReq.id} {...movieReq}/>)}
            </div>
    </div>
      ):(
        <h2>Ooops moi pas trouver recheche toi faire</h2>
      )}
    </div>   
    </>
   
  );
}

export default App;