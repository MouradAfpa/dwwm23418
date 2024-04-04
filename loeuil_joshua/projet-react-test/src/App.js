import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import BoutonPage from "./Moviesearch/Composant/boutonPage";
import SearchBar from "./Moviesearch/Composant/Searchbar";
import CardFilm from "./Moviesearch/Composant/cardFilm";
import BoutonDefilment from "./Moviesearch/Composant/boutonDefil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardSerie from "./Moviesearch/Composant/CardSerie";
import DetailFilm from "./Moviesearch/Composant/detailFilm";
import Favori from "./Moviesearch/Composant/favori";

function App() {

  return (
    <>
    <BrowserRouter>
      <div>
        <SearchBar />
      </div>
      <BoutonDefilment />
      <div>
        <Routes>
          <Route path="/" element={<CardFilm />}/>
          <Route path="/Serie" element={<CardSerie/>} />
          <Route path="/:id" element={<DetailFilm/>}/>
          <Route path="/:id" element={<DetailFilm/>}/>
          <Route path="Favori" element={<Favori/>}/>

       </Routes>
        <BoutonPage />
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
