import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';



function FilmCards() {

    const imgUrl ='https://image.tmdb.org/t/p/w500${posterPath}';



  return (
    <Card border="info" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="imageUrl" alt="title" />
      <Card.Body>
        <Card.Title>title</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default FilmCards;