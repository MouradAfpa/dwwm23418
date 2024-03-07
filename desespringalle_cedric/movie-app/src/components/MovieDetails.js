import React from "react";
import { Modal, Button, Container, Row } from "react-bootstrap";

function MovieDetails({ show, handleClose, movie }) {
    const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/149px-Picture_icon_BLACK.svg.png?20180309172929';

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : placeholderImage;

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{movie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <img src={posterUrl} alt={movie.title} />
                        <p><b>Date de sortie :</b> {movie.release_date}</p>
                        <p><b>Synopsis :</b> {movie.overview}</p>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fermer
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MovieDetails;
