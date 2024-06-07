import { Card, Button, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiName } from "./api";

function Favorites() {
  
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonDetails = async (id) => {
      try {
        const pokemonDetails = await apiName(id);
        setPokemonData(prevData => [...prevData, pokemonDetails]);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    const favRecup = JSON.parse(localStorage.getItem('favoris')) || [];
    favRecup.forEach(pokemonId => {
      fetchPokemonDetails(pokemonId);
    });
  }, []);

  return (

    <div className="d-flex flex-wrap col-10 col-md-10 col-lg-12 m-1">
      <Row className="justify-content-center">
        {pokemonData.map((pokemon, index) => (
          <Card key={index} className="d-flex border-2 border-black m-2" style={{ width: '18rem' }}>
            <Card.Img src={pokemon.sprite} alt="Pokemon image" />
            <Card.Body className="d-flex flex-column text-center">
              <Card.Title>{pokemon.name}</Card.Title>
              <Card.Text>{`#${pokemon.pokedexId}`}</Card.Text>
              <Card.Text>{pokemon.apiTypes.map((elem) => elem.name).join(" / ")}</Card.Text>
              <Link to={`/`}>
                <Button>Retour</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
    
  );
}

export default Favorites;

