import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Form, FormControl } from "react-bootstrap";
import { fetchFilmPops, fetchSeries, rechercheFilms, rechercheSeries } from "../Redux/actions";
import logo from "../../the_movie_database_logo.png";
import { Link } from "react-router-dom";

function SearchBar() {
  const recherche = useSelector((state) => state.Reducer1.query);
  const page = useSelector((state) => state.Reducer1.page);
  const dispatch = useDispatch();

  const handleSearchFilm = () => {
    if (recherche.trim() !== "") {
      dispatch(rechercheFilms(recherche, page));
    } else {
      dispatch(fetchFilmPops());
    }
  };



  return (
    <Navbar
      bg="black"
      expand="lg"
      variant="dark"
      className="d-flex justify-content-between position-relative"
      // style={{ opacity: "70%" }}
    >
      <div className="ps-4">
        <img
          src={logo}
          alt="logo movie database"
          className=" position-fixed-start"
        />
      </div>
      <div className="d-flex justify-content-around gap-4 text-decoration-none">
        <Link to="/">
          <h3 className="text-light text-decoration-underline">Film</h3>
        </Link>
        <Link to="/Serie">
          <h3 className="text-light text-decoration-underline">Serie</h3>
        </Link>
      </div>
      <div className="d-flex justify-content-around gap-4 text-decoration-none">
       <Link to="/Favori"> 
       <h3 className="text-light text-decoration-underline">Favoris</h3>
       </Link>
        <Form className="d-flex" autoComplete="off" onSubmit={handleSearchFilm}>
          <FormControl
            type="search"
            placeholder="Recherche"
            className="me-2"
            aria-label="Recherche"
            name="query"
            value={recherche}
            onChange={(event) => {
              dispatch(rechercheFilms(event.target.value, 1));
            }}
          ></FormControl>
        </Form>
      </div>
    </Navbar>
  );
}

export default SearchBar;
