import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import BoutonPage from "./Moviesearch/composant/boutonPage";
import SearchBar from "./Moviesearch/composant/Searchbar";
import CardFilm from "./Moviesearch/composant/cardFilm";
import BoutonDefilment from "./Moviesearch/composant/boutonDefil";

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
