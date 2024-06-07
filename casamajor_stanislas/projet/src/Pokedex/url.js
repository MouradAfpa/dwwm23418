import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";





function Aled() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

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
          setSearch(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [search]);
  return (
    <div className="d-flex flex-wrap">
      {pokemons.map(
        (
          pokemon //.map pour afficher les éléments de notre choix, en l'occurence ici le nom du pokemon //
        ) => (
          <div>
            <img src={pokemon.sprite} alt="" />
            <div key={pokemon.id}>{pokemon.name}</div>
          </div>
        )
      )}
    </div>
  );
}

export default Aled;
