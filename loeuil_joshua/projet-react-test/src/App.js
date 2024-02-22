import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchFilmPops , rechercheFilms} from "./Moviesearch/Redux/actions"
import "bootstrap/dist/css/bootstrap.css";
import BoutonPage from "./Moviesearch/composant/boutonPage";
import SearchBar from "./Moviesearch/composant/Searchbar";
import CardFilm from "./Moviesearch/composant/CardFilm";

function App() {
  const recherche = useSelector((state) => state.query);
  const dispatch = useDispatch();
  const page = useSelector((state) => state.Reducer1.page);

  useEffect(() => {
    if (!recherche) {
      dispatch(fetchFilmPops());
    } else {
      dispatch(rechercheFilms(recherche, page));
    }
  }, [recherche, dispatch]);

  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div>
        <CardFilm />
        <div
          className="d-flex flex-column gap-5 align-items-end fixed-top m-lg-2"
          style={{ zIndex: 100, top: "48%" }}
        >
          <span>
            <button
              type="button"
              onClick={() => window.scrollTo(0, 0)}
              className="bg-dark text-light border-primary"
            >
              ↑
            </button>
          </span>
          <span>
            <button
              type="button"
              onClick={() => window.scrollTo(0, document.body.scrollHeight)}
              className="bg-dark text-light border-primary"
            >
              ↓
            </button>
          </span>
        </div>
        <BoutonPage />
      </div>
    </>
  );
}

export default App;
