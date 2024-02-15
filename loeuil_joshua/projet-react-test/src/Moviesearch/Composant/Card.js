import React, {useEffect, useState} from "react";
import { Button, Card,Form,FormControl,Navbar, Modal} from "react-bootstrap";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';


const api_key = process.env.REACT_APP_API_KEY;
const url_popu =`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`


function CardFilm({movie}){
    const url_img = movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : '';
const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    return(
        
        <Card border="success" className="bg-dark border-4 rounded-5 text-light" style={{width: '23rem', height:'37rem'}} >
           
            <Card.Body onClick={handleShow} className=" text-center"> 
            <h4>{movie.title}</h4>
                <Card.Img variant="bottom" src={url_img}/>
               
            <Modal show={show} onHide={handleClose} onMouseLeave={handleClose} className="">
                      <Modal.Body className="bg-dark text-light text-center ">
                      <h2>{movie.title}</h2>
                      <img className="card-img-top" style={{width:'14rem'}}src={url_img} alt="movie.original_titre" />
                      <h3>Release Date: {movie.release_date}</h3>
                      <br></br>
                      
                      </Modal.Body>
                      <Modal.Footer className="bg-dark text-light text-center">
                      <p>{movie.overview}</p>
                      </Modal.Footer>
                      </Modal>
            </Card.Body>
           
        </Card>
    )

};

function ListFilm (){

    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [movies, setMovies] = useState([]);

   
    useEffect(() =>{
        axios.get(url_popu)
        .then(res =>{
            const movies = res.data.results;
            setMovies(movies)
            console.log(movies);
    })
}, []);


const handleSubmit = async (event) => {
    event.preventDefault();
    const url_search=`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${api_key}`
    await axios.get(url_search)
    .then(res =>{
        const searchResults = res.data.results;
        setSearchResults(searchResults);

    })
}

const filmToDisplay = query ? searchResults : movies ;



const pagePrecedente =  (movies.page) <= 1 ? <button type="button" id="btn_prec" disabled className="">Precedent</button>: <button type="button" id="btn_prec">Precedent</button>;
const pageActuel = movies.page;
const nbreTotalPages  = (movies.total_pages);  


        return(
            <>
            <Navbar bg="secondary" expand="lg" variant="dark" className="d-flex justify-content-center">
                    <div>
                    <Form className="d-flex" onSubmit={handleSubmit} autoComplete="off">
                        <FormControl type="search"
                        placeholder="Recherche"
                        className="me-2"
                        aria-label="Recherche"
                        name="query"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}></FormControl>
                        <Button variant="primary" type="submit">Search</Button>
                    </Form>
                    </div>

        </Navbar>  

            <div className="d-flex justify-content-around flex-wrap gap-3 pt-3 bg-black">
            {filmToDisplay.map(movie => (<CardFilm key={movie.id} movie={movie}/>
            ))}
            </div>
            <div className="d-flex justify-content-center">
                <div>
                {pagePrecedente}
                </div>
                <div>
                <p>{pageActuel}</p>
                </div>
                {nbreTotalPages}
            </div>
            </>
        );
                };
    export default ListFilm;