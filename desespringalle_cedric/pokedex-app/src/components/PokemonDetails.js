import React, { useEffect, useState } from "react";
import { getPokemonDetails } from "./Api";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  ProgressBar,
} from "react-bootstrap";

const PokemonDetails = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemonDetails() {
      try {
        const data = await getPokemonDetails(pokemonId);
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    }
    fetchPokemonDetails();
  }, [pokemonId]);

  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.find((favorite) => favorite.id === pokemon.id)) {
      const updateFavorites = [...favorites, pokemon];
      localStorage.setItem("favorites", JSON.stringify(updateFavorites));
    }
  };

  return (
    <>
      <div>
        {pokemon ? (
          <div className="d-flex justify-content-center mt-5">
            <Card style={{ width: "22rem" }}>
              <Button variant="secondary" onClick={handleAddToFavorites}>
                Ajouter aux favoris
              </Button>
              <Card.Img variant="top" src={pokemon.image} alt={pokemon.name} />
              <Card.Body>
                <Card.Title className="text-center">
                  <h1>{pokemon.name}</h1>
                </Card.Title>
                <Card.Text>
                  <b className="me-5">Types:</b>{" "}
                  {pokemon.apiTypes.map((type) => (
                    <img className="w-25" src={type.image} alt={type.name} />
                  ))}
                </Card.Text>
                <Card.Text>
                  <b>Stats:</b>
                  <Container>
                    {Object.keys(pokemon.stats).map((stat) => (
                      <Row key={stat}>
                        <Col>{stat}</Col>
                        <Col>
                          <ProgressBar
                            animated
                            variant="success"
                            label={pokemon.stats[stat]}
                            now={pokemon.stats[stat]}
                            max={250}
                          />
                        </Col>
                      </Row>
                    ))}
                  </Container>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PokemonDetails;
