import "./App.css";
import React, { useState } from "react";
import Main from "./components/Main";
import PokemonDetails from "./components/PokemonDetails";
import Nav from "./components/NavBar";
import FavoritesPage from "./components/FavoritesPage";

function App() {
  const [view, setView] = useState("main");
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);

  const handlePokemonClick = (id) => {
    setSelectedPokemonId(id);
    setView("details");
  };

  return (
    <div>
      <Nav onViewChange={setView} onClose={() => setView("main")} />
      {view === "main" && <Main onPokemonClick={handlePokemonClick} />}
      {view === "details" && <PokemonDetails pokemonId={selectedPokemonId} />}
      {view === "favorites" && (
        <FavoritesPage onClose={() => setView("main")} />
      )}
    </div>
  );
}

export default App;
