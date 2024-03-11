import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./App.css";
import PokemonList from "./components/PokemonList";
import PokemonSearched from "./components/PokemonSearched";
import SearchBox from "./components/SearchBox";
import GenSwitch from "./components/GenSwitch";

const App = () => {
  const pokePerPage = 20;

  const [pokemon, setPokemon] = useState([]);
  const [recherche, setRecherche] = useState("");
  const [search, setSearch] = useState(false);

  // test pour changer de génération
  const [gen, setGen] = useState(1);

  // test pour la pagination
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!recherche && gen === 1) {
      axios
        .get(`https://pokebuildapi.fr/api/v1/pokemon/generation/1`)
        .then((res) => {
          setPokemon(res.data);
        });
    } else if (!recherche && gen === 2) {
      axios
        .get(`https://pokebuildapi.fr/api/v1/pokemon/generation/2`)
        .then((res) => {
          setPokemon(res.data);
        });
    } else {
      axios
        .get(`https://pokebuildapi.fr/api/v1/pokemon/${recherche}`)
        .then((res) => {
          setPokemon(res.data);
        });
    }
  }, [recherche, gen]);

  return (
    <div className="App">
      <header className="App-header">
        <SearchBox
          setRecherche={setRecherche}
          recherche={recherche}
          search={search}
          setSearch={setSearch}
        />
      </header>

      <main>
        {/* <GenSwitch gen={gen} setGen={setGen} /> */}
        {Array.isArray(pokemon) ? (
          <PokemonList pokemon={pokemon} gen={gen} setGen={setGen} />
        ) : (
          <PokemonSearched pokemon={pokemon} />
        )}
      </main>
    </div>
  );
};

export default App;
