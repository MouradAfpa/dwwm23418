import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import BoutonPage from "./Moviesearch/Composant/boutonPage";
import SearchBar from "./Moviesearch/Composant/Searchbar";
import CardFilm from "./Moviesearch/Composant/cardFilm";
import BoutonDefilment from "./Moviesearch/Composant/boutonDefil";

function App() {

  return (
    <>
      <div>
        <SearchBar />
      </div>
      <BoutonDefilment />
      <div>
        <CardFilm />
       
        <BoutonPage />
      </div>
    </>
  );
}

export default App;
