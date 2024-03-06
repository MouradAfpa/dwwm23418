import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

function CardFavoris(props) {

  const retirerFavoris = (pokemon) => {
    const updatedFav = props.favoris.filter((fav) => fav.id !== pokemon.id);
    props.setFavoris(updatedFav);
    localStorage.setItem("favoris", JSON.stringify(updatedFav));
  };
  return (
    <Card className="m-5 border-2 border-dark" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.pokemon.image} />
      <Card.Body>
        <Card.Title>
          <h4>
            {props.pokemon.name}
            <Badge bg="secondary" className="ms-2">
              #{props.pokemon.pokedexId}
            </Badge>
          </h4>
        </Card.Title>
        <Card.Text className="align-item">
          <Container>
            <Row>
              <Link to={`/details/${props.pokemon.id}`}>
                <Row>
                  <Button variant="primary">View {props.pokemon.name}</Button>
                </Row>
              </Link>
              <Button
                variant="danger"
                onClick={() => retirerFavoris(props.pokemon)}
              >
                Retirer des Favoris
              </Button>
            </Row>
          </Container>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardFavoris;
