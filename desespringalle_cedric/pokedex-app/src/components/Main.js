import React, { useState, useEffect } from "react";
import { getPokemonList, searchPokemon } from "./Api";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";

function Main({ onPokemonClick }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemonList();
      setPokemonList(data);
      setSearchResult(data);
    }
    fetchData();
  }, []);

  const handleSearch = async (searchTerm) => {
    if (searchTerm === "") {
      setSearchResult(pokemonList);
    } else {
      const result = await searchPokemon(searchTerm);
      setSearchResult(result ? [result] : []);
    }
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleSearch} />
      <div className="row">
        {searchResult.map((pokemon) => (
          <div key={pokemon.id} className="col-md-3">
            <PokemonList
              pokemon={pokemon}
              onClick={() => onPokemonClick(pokemon.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
