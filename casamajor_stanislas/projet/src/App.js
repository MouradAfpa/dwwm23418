import Navbar from "./Pokedex/NavBar/navbar";
import Carte from "./Pokedex/cartePokemon";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Favoris from "./Pokedex/favoris";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [click, setClick] = useState(false);
  const [favoris, setFavoris] = useState([]);

  const removeFavoris = (id) => {
    let index = favoris.indexOf(id);
    
    let temp = [...favoris.slice(0, index), ...favoris.slice(index + 1)];
    setFavoris(temp);
  };

  useEffect(() => {
    if (!search) {
      axios
        .get(`https://pokebuildapi.fr/api/v1/pokemon/limit/151`)
        .then((res) => {
          setPokemons(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .get(`https://pokebuildapi.fr/api/v1/pokemon/${search}`)
        .then((res) => {
          setPokemons(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [search]);
  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <Favoris pokemons={pokemons} favoris={favoris} setFavoris={setFavoris} removeFavoris={removeFavoris} click={click} setClick={setClick}/>
      {console.log(favoris)}
      <div className="d-flex flex-wrap justify-content-around p-2 gap-5">
        {Array.isArray(pokemons) ? (
          pokemons.map((pokemon) => (
            <Carte
              click={click} 
              setClick={setClick}
              removeFavoris={removeFavoris}
              pokemon={pokemon}
              pokemons={pokemons}
              favoris={favoris}
              setFavoris={setFavoris}
            />
          ))
        ) : (
          <Carte pokemon={pokemons} />
        )}
      </div>
    </div>
  );
};
export default App;
