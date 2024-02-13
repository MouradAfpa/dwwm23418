import React from 'react';
import Card from 'react-bootstrap/Card';


function FilmCards(props) {
  console.log(props.movie)
  return (
    <Card border="info" style={{ width: '18rem' }} className='m-5 border-4'>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title} />
      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default FilmCards;