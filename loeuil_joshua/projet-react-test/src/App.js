import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import BoutonPage from "./Moviesearch/Composant/boutonPage";
import SearchBar from "./Moviesearch/Composant/Searchbar";
import CardFilm from "./Moviesearch/Composant/cardFilm";
import BoutonDefilment from "./Moviesearch/Composant/boutonDefil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardSerie from "./Moviesearch/Composant/CardSerie";
import Detail from "./Moviesearch/Composant/detail";

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
          <Route path="/detail/:id" element={<Detail/>}/>

       </Routes>
        <BoutonPage />
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
