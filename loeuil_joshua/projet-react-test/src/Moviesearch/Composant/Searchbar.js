import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Form, FormControl } from "react-bootstrap";
import { fetchFilmPops, rechercheFilms } from "../Redux/actions";

function SearchBar() {
  const recherche = useSelector((state) => state.Reducer1.query);
  const page = useSelector((state) => state.Reducer1.page);

  const dispatch = useDispatch();

  const handleSearch = () => {
    if (recherche.trim() !== "") {
      dispatch(rechercheFilms(recherche, page));
    } else {
      dispatch(fetchFilmPops());
    }
  };

  return (
    <Navbar
      bg="secondary"
      expand="lg"
      variant="dark"
      className="d-flex justify-content-center fixed-top "
      style={{ opacity: "70%" }}
    >
      <div>
        <Form className="d-flex" autoComplete="off" onSubmit={handleSearch}>
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
