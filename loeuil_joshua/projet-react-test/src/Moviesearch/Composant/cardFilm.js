import { Modal,show,Button} from 'react-bootstrap';
import React, {useState} from 'react';


const API_URL_IMG ="https://image.tmdb.org/t/p/w500/";
const CardFilm = ({titre, poster_path, release_date, overview})=> {
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    return (
        <div className="card text-center bg-success mb-3">
        <div className="card-body">
          <img className="card-img-top" src={API_URL_IMG+poster_path} />
          <div className="card-body">
              <button type="button" className="btn btn-dark" onClick={handleShow} >View More</button>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <img className="card-img-top" style={{width:'14rem'}}src={API_URL_IMG+poster_path} />
                  <h3>{titre}</h3>
                  <h5>Release Date: {release_date}</h5>
                  <br></br>
                  <h6>Overview</h6>
                  <p>{overview}</p>
                  </Modal.Body>
                  <Modal.Footer>
                      <Button variant="primary" onClick={handleClose}>Close</Button>
                  </Modal.Footer>
              </Modal>
          </div>
        </div>
    </div>
)
}

export default CardFilm;