import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


function FilmCards(props) {
  
  return (
    <Card border="info" style={{ width: '18rem' }} className='m-5 border-2 bg-black'>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title} />
      <Card.Body>
        <Card.Title className='text-light'>{props.movie.title}</Card.Title>
        <Button variant="outline-info">En savoir plus</Button>
      </Card.Body>
    </Card>
  );
}

export default FilmCards;