import React from 'react';
import { Button, Card } from 'react-bootstrap';

function DetailFilm({ film, onBackToHome }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={film.poster_path} />
      <Card.Body>
        <Card.Title>{film.title}</Card.Title>
        <Card.Title>{film.release_date}</Card.Title>
        <Card.Text>{film.overview}</Card.Text>
        <Button variant="primary" onClick={onBackToHome}>Retour à l'accueil</Button>
      </Card.Body>
    </Card>
  );
}

export default DetailFilm;
