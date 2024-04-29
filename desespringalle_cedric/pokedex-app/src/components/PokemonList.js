import React from "react";
import { Card } from "react-bootstrap";
import ViewDetailsButton from "./ViewDetailsButton";

function PokemonList({ pokemon, onClick }) {
  return (
    <Card className="mt-5 text-center" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pokemon.image} alt={pokemon.name} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text
          style={{ width: "fit-content", margin: "auto" }}
          className="ps-2 pe-2 fw-bold bg-dark-subtle rounded-pill"
        >
          #{pokemon.id}
        </Card.Text>
        <ViewDetailsButton onClick={onClick} />
      </Card.Body>
    </Card>
  );
}

export default PokemonList;
