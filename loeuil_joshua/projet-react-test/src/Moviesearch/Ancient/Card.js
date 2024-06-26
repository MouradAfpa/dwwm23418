import React, {useEffect, useState} from "react";
import { Card, Modal, Navbar, Form, FormControl, Button} from "react-bootstrap";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';


const api_key = process.env.REACT_APP_API_KEY;


function CardFilm({movie}){
    const url_img = movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : '';
const [show, setShow]=useState(false);

    const handleShow = ()=>{setShow(true)};
    const handleClose= ()=>{setShow(false)};
    return(
        
        <Card className="bg-dark border-4 rounded-5 text-light" style={{width: '23rem', height:'38rem', borderColor: 'chartreuse'}} >
           
            <Card.Body onClick={handleShow} className=" text-center"> 
            <h4>{movie.title}</h4>
                <Card.Img variant="bottom" src={url_img}/>
               </Card.Body>
            <Modal show={show} onHide={handleClose} className="">
                      <Modal.Body className="bg-dark text-light text-center row-1cols-2">
                      <h1>{movie.title}</h1>
                      <img className="card-img-top" style={{width:'14rem'}}src={url_img} alt={movie.title} />
                      <h3>Release Date: {movie.release_date}</h3>
                      <br></br>
                      
                      </Modal.Body>
                      <Modal.Footer className="bg-dark text-light text-center">
                      <p>{movie.overview}</p>
                      </Modal.Footer>
                      </Modal>
            
           
        </Card>
    )

};

function ListFilm (){
    

    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


const url_popu = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${page}`;

const handleSearchChange = (event) =>{
    setQuery(event.target.value);
    setPage(1)
}

   
    useEffect(() =>{
       const fetchMovies = async () =>{
        try{
            const reponse = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${api_key}&page=${page}`);
            setSearchResults(reponse.data.results);
            setTotalPages(reponse.data.total_pages);
            } catch (error){
                console.error(error);
            }
       };

       fetchMovies();
}, [query, page]);

useEffect(() =>{
    const fetchPopuMovies = async () =>{
        try{
            const res = await axios.get(url_popu);
            setMovies(res.data.results);
            setTotalPages(res.data.total_pages);
        }catch(error){
            console.error(error);
        }
    };
    fetchPopuMovies();
}, [url_popu, page]);


const handlePrevPage = () =>{
    if(page > 1){
        setPage(page - 1);
    }
};

const handleNextPage = () =>{
    if(page<totalPages){
        setPage(page + 1)
    }
};


const filmToDisplay = query ? searchResults : movies ;


        return(
            <>
            <Navbar bg="secondary" expand="lg" variant="dark" className="d-flex justify-content-center fixed-top" style={{opacity: '70%'}} id="dbt">
                    <div>
                    <Form className="d-flex" autoComplete="off">
                        <FormControl type="search"
                        placeholder="Recherche"
                        className="me-2"
                        aria-label="Recherche"
                        name="query"
                        value={query}
                        onChange={handleSearchChange}></FormControl>
                        <Button variant="primary" type="submit">Search</Button>
                    </Form>
                    </div>

        </Navbar>  
        <div className="d-flex flex-column gap-5 align-items-end fixed-top m-lg-2" style={{zIndex: 100, top: '48%'}}>
                <span>
                    <button type="button" onClick={()=>window.scrollTo(0, 0)} className="bg-dark text-light border-primary">↑</button>
                </span>
                <span>
                <button type="button" onClick={()=>window.scrollTo(0, document.body.scrollHeight)} className="bg-dark text-light border-primary">↓</button>
                </span>
            </div>

            <div className="d-flex justify-content-evenly flex-wrap gap-4 pt-lg-5 bg-black">
            {filmToDisplay.map(movie => (<CardFilm key={movie.id} movie={movie}/>
            ))}
            </div>
            <div className="d-flex justify-content-around bg-black text-light p-5">
                <div>
                    <button type="button" onClick={handlePrevPage} className="border-3 bg-black text-danger" style={{borderColor: 'chartreuse'}}>Precedent</button>
                </div>
                <div className="d-flex justify-content-center">
                    <span className=" border-bottom"> 
                        Page: {page} sur {totalPages}
                    </span>
                </div>
                <div id="fin">
                    <button type="button" onClick={handleNextPage} className="border-3 bg-black text-danger" style={{borderColor: 'chartreuse'}}>Suivant</button>
                </div>
            </div>
            
            </>
        );
                };
    export default ListFilm;