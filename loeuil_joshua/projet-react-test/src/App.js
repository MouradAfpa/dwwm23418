import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import BoutonPage from "./Moviesearch/Composant/boutonPage";
import SearchBar from "./Moviesearch/Composant/Searchbar";
import CardFilm from "./Moviesearch/Composant/cardFilm";
import BoutonDefilment from "./Moviesearch/Composant/boutonDefil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardSerie from "./Moviesearch/Composant/CardSerie";

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
          <Route path="/Film" element={<CardFilm />}/>
          <Route path="/Serie" element={<CardSerie/>} />

       </Routes>
        <BoutonPage />
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
