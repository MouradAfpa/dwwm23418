import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  rechercheFilms,
  getFilmTrends,
  getFilmDiscoverys,
  getFilmPops,
  getSeries,
  resetPage,
} from "../actions/getfilm.action";
import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import FilmCards from "./CardsFilm";
import Boutons from "./Bouton";
import NavBar from "./NavBar";
import ScrollBouton from "./ScrollBouton";
import Carroussel from "./Carroussel";
import Categories from "./catégories";

function AffichageFilms() {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.FilmReducer.films);
  const recherche = useSelector((state) => state.FilmReducer.recherche);

  const page = useSelector((state) => state.FilmReducer.page);
  const [listeAfficher, setListeAfficher] = useState("trendFilm");

  const trendFilm = () => {
    setListeAfficher("trendFilm");
    dispatch(resetPage());
  };

  const popFilm = () => {
    setListeAfficher("PopFilm");
    dispatch(resetPage());
    console.log(listeAfficher);
  };

  const discoveryFilm = () => {
    setListeAfficher("discoveryFilm");
    dispatch(resetPage());
  };
  const trendSerie=()=>{
    setListeAfficher("trendSerie");
    dispatch(resetPage())
  }

  useEffect(() => {
    if (recherche) {
      dispatch(rechercheFilms(recherche, page));
    } else if (listeAfficher === "PopFilm") {
      dispatch(getFilmPops(page));
    } else if (listeAfficher === "discoveryFilm") {
      dispatch(getFilmDiscoverys(page));
    } else if (listeAfficher === "trendingSerie") {
      dispatch(getSeries(page));
    } else {
      dispatch(getFilmTrends(page));
    }
  }, [recherche, page, listeAfficher]);

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

  return (
    <>
      <NavBar />

      <Carroussel />
      <Categories listeAfficher={listeAfficher} setListeAfficher={setListeAfficher} />
      <ScrollBouton />

      <Container className="mt-5">
        <Row className="justify-content-center">
          {films.map((film) => (
            <FilmCards key={film.id} movie={film} />
          ))}

          <Boutons />
        </Row>
      </Container>
    </>
  );
}

export default AffichageFilms;
