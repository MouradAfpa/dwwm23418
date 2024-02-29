import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/esm/Button';
import {Col, Container, Row} from 'react-bootstrap/esm/';

function Modals({show,setShow,props}){
    const handleClose = () => setShow(false);
    return ( 
        <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header className='bg-info text-light border-black' closeButton closeVariant='white'>
                <Modal.Title >{props.movie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-black text-light'>
                <Container>
                    <Row>
                        <Col>
                            <Image src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title} thumbnail/>
                        </Col>
                        <Col>
                            <h1>{props.movie.title}</h1>
                            <p> Date de sortie : {props.movie.release_date}</p>
                            <Button variant="info">{props.movie.vote_average}</Button>
                            <hr></hr>
                            <h4>Synopsis</h4>
                            <p>{props.movie.overview}</p>
                            <Image src={`https://image.tmdb.org/t/p/w1280${props.movie.backdrop_path}`} alt={props.movie.title}  thumbnail fluid/>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer className='bg-info text-light border-black'>
                <Button variant="outline-light" onClick={handleClose}>
                Fermer
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default Modals;