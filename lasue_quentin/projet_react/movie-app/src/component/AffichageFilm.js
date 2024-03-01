import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import FilmCards from "./CardsFilm";
import Boutons from "./Bouton";
import NavBar from "./NavBar";
import ScrollBouton from "./ScrollBouton";
import Carroussel from "./Carroussel";

function AffichageFilms() {
  const [searchVal, setSearchVal] = useState("");
  const [movies, setMovies] = useState([]);
  const [pageActuelle, setPage] = useState(1);
  const [nbrPage, setNbrPage] = useState("1");

  useEffect(() => {
    if (!searchVal) {
      const getFilms = async () => {
        try {
          const movies = await axios.get(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${pageActuelle}`
          );

          setMovies(movies.data.results);
          setNbrPage(movies.data.total_pages);
        } catch (error) {
          console.log("error fetching movies:", error);
        }
      };
      getFilms();
    } else {
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
    }
  }, [pageActuelle, searchVal]); // à l'écoute des changements de Page et search Val

  return (
    <>
      <NavBar
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        setPage={setPage}
        pageActuelle={pageActuelle}
      />

      <Carroussel />

      <ScrollBouton />

      <Container className="mt-5">
        <Row className="justify-content-center">
          {movies.map((film) => (
            <FilmCards key={film.id} movie={film} />
          ))}

          <Boutons
            pageActuelle={pageActuelle}
            setPage={setPage}
            nbrPage={nbrPage}
          />
        </Row>
      </Container>
    </>
  );
}

export default AffichageFilms;
