import React, {useEffect, useState} from "react";
import { Button, Card,Form,FormControl,Navbar, Modal} from "react-bootstrap";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';





function CardFilm({movie}){
    const url_img = movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : '';
const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    return(
        
        <Card border="success" className="bg-dark border-4 rounded-5 text-light" style={{width: '23rem', height:'38rem'}} >
           
            <Card.Body onClick={handleShow} className=" text-center"> 
            <h4>{movie.title}</h4>
                <Card.Img variant="bottom" src={url_img}/>
               
            <Modal show={show} onHide={handleClose} onMouseLeave={handleClose} className="">
                      <Modal.Body className="bg-dark text-light text-center row-1cols-2">
                      <h1>{movie.title}</h1>
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
            
    })
}, []);


const handleSubmit = async (event) => {
    setQuery(event.target.value);
    try{
    const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${api_key}`);
        setSearchResults(response.data.results);
} catch (error) {
    console.error("Encore");
}
};

const filmToDisplay = query ? searchResults : movies ;


        return(
            <>
            <Navbar bg="secondary" expand="lg" variant="dark" className="d-flex justify-content-center">
                    <div>
                    <Form className="d-flex" autoComplete="off">
                        <FormControl type="search"
                        placeholder="Recherche"
                        className="me-2"
                        aria-label="Recherche"
                        name="query"
                        value={query}
                        onChange={handleSubmit}></FormControl>
                        <Button variant="primary" type="submit">Search</Button>
                    </Form>
                    </div>

        </Navbar>  

            <div className="d-flex justify-content-around flex-wrap gap-5 pt-3 bg-black">
            {filmToDisplay.map(movie => (<CardFilm key={movie.id} movie={movie}/>
            ))}
            </div>
            </>
        );
                };
    export default ListFilm;