import React, { useEffect } from "react";
import axios from "axios";
import FilmCards from "./CardsFilm";
import Button from "react-bootstrap/Button";

function ListeFilm() {
  const [films, setFilms] = React.useState([]);
  const [pageActuelle, setPage] = React.useState(1);
  const [nbrPage, setNbrPage] = React.useState("1");

  useEffect(() => {
    const getFilms = async () => {
      try {
        const movies = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${pageActuelle}`
        );

        setFilms(movies.data.results);
        setNbrPage(movies.data.total_pages);
      } catch (error) {
        console.log("error fetching movies:", error);
      }
    };
    getFilms();
  }, [pageActuelle]);

  const nextPage = () => {
    if (pageActuelle !== nbrPage) setPage(pageActuelle + 1);
  };

  const previousPage = () => {
    if (pageActuelle > 1) {
      setPage(pageActuelle - 1);
    }
  };

  return (
    <div className="conrainer mt-5">
      <div className="row justify-content-center">
        <h1 className="text-info fw-bold">Les films du moment : </h1>
        {films.map((film) => (
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
    </div>
  );
}
export default ListeFilm;
