import React, {useState}from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';



function FilmCards(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card border="info" style={{ width: '18rem' }} className='m-5 border-2 bg-black' onClick={handleShow}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title} />
      <Card.Body>
        <Card.Title className='text-light'>{props.movie.title}</Card.Title>
        <Button variant="outline-info">En savoir plus</Button>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
    <Modal.Header className='bg-info text-light border-black' closeButton closeVariant='white'>
      <Modal.Title >{props.movie.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body className='bg-black text-light'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
          <Image src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title} thumbnail/>
          </div>
          <div className='col'>
            <h1>{props.movie.title}</h1>
            <p> Date de sortie : {props.movie.release_date}</p>
            <Button variant="info">{props.movie.vote_average}</Button>
            <hr></hr>
            <h4>Synopsis</h4>
            <p>{props.movie.overview}</p>
            
            </div>
        </div>
      </div>
      
      </Modal.Body>
    <Modal.Footer className='bg-info text-light border-black'>
      <Button variant="outline-light" onClick={handleClose}>
        Fermer
      </Button>
    </Modal.Footer>
  </Modal>
  </>
  );
}

export default FilmCards;