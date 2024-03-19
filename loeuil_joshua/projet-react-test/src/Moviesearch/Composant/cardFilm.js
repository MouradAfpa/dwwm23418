import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { fetchFilmPops, rechercheFilms } from "../Redux/actions";
import { useNavigate } from "react-router-dom";

function CardFilm() {
  const movies = useSelector((state) => state.Reducer1.result);
  const page = useSelector((state) => state.Reducer1.page);
  const recherche = useSelector((state) => state.Reducer1.query);
  const dispatch = useDispatch();
  const navigate = useNavigate();


 

  useEffect(() => {
    if (recherche) {
      dispatch(rechercheFilms(recherche, page));
    } else {
      dispatch(fetchFilmPops(page));
    }
  }, [recherche, page, dispatch]);

 function handleClick(movie){
  navigate(`/${movie.id}`)
 }


 


  return (
    <div className="d-flex justify-content-evenly flex-wrap gap-4 pt-lg-5 p-5 m-5 bg-primary-subtle">
      {movies.map((movie) => (
        <Card
          key={movie.id}
          className="bg-dark-subtle border-4 border-black "
          style={{ width: "20rem", height: "38rem"}}
        >
          <Card.Img
              variant="bottom"
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            />
          <Card.Body className=" text-center d-flex flex-column justify-content-between">
            <h4>{movie.title}</h4>
            <button onClick={() => handleClick(movie)} className="rounded-5 ps-3 pe-3 bg-white">Voir detail</button>
          </Card.Body>
          
         
        </Card>
      ))}
    </div>
    )
  }
  export default CardFilm;

