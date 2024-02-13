import React from 'react';
import Card from 'react-bootstrap/Card';



function FilmCards(props) {

  return (
    <Card border="info" style={{ width: '18rem' }} className='m-5 border-4'>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.film.poster_path}`} alt={props.film.title} />
      <Card.Body>
        <Card.Title>{props.film.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default FilmCards;