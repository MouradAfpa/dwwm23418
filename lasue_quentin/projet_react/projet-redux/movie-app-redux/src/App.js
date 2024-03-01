import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  rechercheFilms,
  getFilmTrends,
  getFilmDiscoverys,
  getFilmPops,
  nextPage,
  previousPage,
  resetPage,
} from "./actions/getfilm.action";
import { Button } from "bootstrap";

function App() {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.FilmReducer.films);
  const recherche = useSelector((state) => state.FilmReducer.recherche);
  const page = useSelector((state) => state.FilmReducer.page);
  let listeAfficher = "trendFilm";

  const trendFilm = () => {
    dispatch(getFilmTrends());
    dispatch(resetPage());
    listeAfficher = "trendFilm";
  };

  const popFilm = () => {
    dispatch(getFilmPops());
    dispatch(resetPage());
    listeAfficher = "PopFilm";
  };

  const discoveryFilm = () => {
    dispatch(getFilmDiscoverys());
    dispatch(resetPage());
    listeAfficher = "discoveryFilm";
  };

  useEffect(() => {
    if (recherche) {
      dispatch(rechercheFilms(recherche));
    } else if (listeAfficher === "trendFilm") {
      dispatch(getFilmTrends());
    } else if (listeAfficher === "popFilm") {
      dispatch(getFilmPops());
    } else if (listeAfficher === "discoveryFilm") {
      dispatch(getFilmDiscoverys());
    }
  }, [recherche, page]);

  const ChangeRecherche = (event) => {
    dispatch(rechercheFilms(event.target.value));
  };

  const categories = [
    {
      nom: "Trend",
      onclick: trendFilm,
    },
    {
      nom: "Pop",
      onclick: popFilm,
    },
    {
      nom: "Discovery",
      onclick: discoveryFilm,
    },
  ];

  const nexPage = () => {
    dispatch(nextPage());
  };

  const prevPage = () => {
    dispatch(previousPage());
  };

  return (
    <div>
      <input
        placeholder="Recherche films "
        value={recherche}
        type="text"
        onChange={ChangeRecherche}
      />
      {categories.map((cat) => (
        <button onClick={cat.onclick} key={cat.nom}>
          {cat.nom}
        </button>
      ))}

      <button onClick={nexPage}>Next</button>
      <button onClick={prevPage}>Previous</button>
      {films.map((movie) => (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          key={movie.id}
          alt={movie.title}
        />
      ))}
    </div>
  );
}

export default App;
