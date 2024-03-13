import React, { useState } from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((pokemon) => pokemon.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <Container className="mt-5">
        <Row xs={1} md={4} className="g-4">
          {favorites.map((pokemon) => (
            <Col key={pokemon.id}>
              <Card className="text-center" style={{ width: "18rem" }}>
                <Button
                  variant="danger"
                  onClick={() => removeFromFavorites(pokemon.id)}
                >
                  Retirer des favoris
                </Button>
                <Card.Img
                  variant="top"
                  src={pokemon.image}
                  alt={pokemon.name}
                />
                <Card.Body>
                  <Card.Title className="fw-bold fs-1">
                    {pokemon.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FavoritesPage;
