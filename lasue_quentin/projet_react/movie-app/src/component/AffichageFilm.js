import React, { useEffect } from "react";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Col, NavbarBrand, Row } from "react-bootstrap";
import FilmCards from "./CardsFilm";
import ListeFilm from "./ListeFilm";

function AffichageFilms() {
  const [searchVal, setSearchVal] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const [pageActuelle, setPage] = React.useState(1);
  const [nbrPage, setNbrPage] = React.useState("1");

  useEffect(() => {
    const getFilm = async () => {
      try {
        const movie = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchVal}&page=${pageActuelle}`
        );

        setMovies(movie.data.results);
        setNbrPage(movie.data.total_pages);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    getFilm();
  }, [pageActuelle, searchVal]); // à l'écoute des changements de Page et search Val

  const searchMovie = (searchVal) => {
    setSearchVal(searchVal);
    setPage(1); // Reset pageActuelle à 1 los de la nouvele recherche
  };

  const changeRecherche = (e) => {
    //a l'écoute de l'événement dès qu'il y a un changement, on envoi la nouvelle valeur dans searchVal
    const searchVal = e.target.value;
    setSearchVal(searchVal);
    searchMovie(searchVal);
  };

  const nextPage = () => {
    if (pageActuelle !== nbrPage) setPage(pageActuelle + 1);
  };

  const previousPage = () => {
    if (pageActuelle > 1) {
      setPage(pageActuelle - 1);
    }
  };

  return (
    <>
      <Navbar
        className="bg-dark justify-content-center"
        data-bs-theme="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            {" "}
            <span className="text-warning fw-bold">Search</span>{" "}
            <i className="text-info">Films</i>
          </Navbar.Brand>
          <Form.Control
            onChange={changeRecherche}
            value={searchVal}
            type="text"
            placeholder="Rechercher un film"
            className=" mr-sm-2"
          />
        </Container>
      </Navbar>

      <div className="container mt-5">
        {movies.length === 0 || searchVal === "" ? (
          <div className="row justify-content-center">
            <ListeFilm />
          </div>
        ) : (
          <>
            <div className="row justify-content-center">
              {movies.map((film) => (
                <FilmCards key={film.id} movie={film} />
              ))}
            </div>
            <div className="row">
              <div className="col">
                <Button variant="outline-info" onClick={previousPage} size="lg">
                  Page précédente
                </Button>
              </div>
              <div className="col">
                <Button variant="outline-info" size="lg">
                  Page {pageActuelle}
                </Button>
                <Button variant="outline-info" size="lg">
                  Total pages :{nbrPage}
                </Button>
              </div>
              <div className="col">
                <Button variant="outline-info" onClick={nextPage} size="lg">
                  Page suivante
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default AffichageFilms;
