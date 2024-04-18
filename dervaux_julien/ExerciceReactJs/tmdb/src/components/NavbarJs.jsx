import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import CardMovie from './CardMovie';
import CardSerie from './CardSerie';
import { useState } from 'react';
import '/STYLE/style.css'
import PaginationComponent from './PaginationComponent';


const NavbarJs = ({ search, setSearch, movies, popularSeries, showModal, setShowModal, page, setPage }) => {

  const [showMovies, setShowMovies] = useState(true);
  const [showSeries, setShowSeries] = useState(true);

  const handleClick = () => {
    navigate(`/film/detail/${movies.id}`);
    setShowModal(false);
    setSearch('');
    setShowMovies(true);
    setPage(1);
  };


  function darkMode() {
    let getDiv = document.getElementById('root');
    let darkModeOn = getDiv.classList.contains('darkMode');

    if (!darkModeOn) {
      getDiv.classList.add('darkMode');
    } else {
      getDiv.classList.remove('darkMode');
    }
  }

  const handleMovieFilter = () => {
    setShowMovies(true);
    setShowSeries(false);
  };

  const handleSerieFilter = () => {
    setShowMovies(false);
    setShowSeries(true);
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };


  const navigate = useNavigate();
  const toSerieView = () => { navigate("/serie") }
  const goBack = () => { navigate(-1) }

  return (

    <div className='position-sticky'>
      <Navbar expand="sm"  className='navbar navbar-expand-lg bg-body-tertiary justify-content-center align-items-center'>
        <Nav className='align-items-center'>
        <Link onClick={() => setPage(1)} className='text-dark  m-3 pe-3 ' to={'/'}>Home</Link>
        <Link onClick={() => setPage(1)} className='text-dark m-3 pe-3' to={'/film'}>Film</Link>
        <Link onClick={() => setPage(1)} className='text-dark m-3 pe-3' to={'/serie'}>Serie</Link>
        <Link className='text-dark m-3 pe-3' to={'/favoris'}>Favorite</Link>
        <Link onClick={() => setShowModal(true)} className='text-dark m-3 cursor-pointer pe-3'>Rechercher</Link>
        <Form>
          <Form.Check
            type="switch"
            onClick={darkMode}
          />
        </Form>
        </Nav>
      </Navbar>

      <div className='container-fluid'>
        <Modal
          dialogClassName="modal-dialog-scrollable modal-fullscreen"
          show={showModal}
          onHide={() => {
            setShowModal(false);
            setSearch('');
            setShowMovies(true);
            setPage(1)
            navigate("/")
          }}>

          <Modal.Header closeButton className='d-flex justify-content-center' >
            <Col md="auto" className="d-flex justify-content-end mr-sm-2">
              <Form.Control
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleInputChange}
              />
            </Col>
            <Button onClick={handleMovieFilter}>Films</Button>
            <Button onClick={handleSerieFilter}>Séries</Button>
            <Col md="auto" className="d-flex justify-content-center align-items-center">
              <PaginationComponent page={page} setPage={setPage} />
            </Col>
          </Modal.Header>


          <Modal.Body className='d-flex flex-wrap justify-content-center'>

            {showMovies &&
              movies.map((movie) => (
                <CardMovie
                  className="border-5"
                  key={movie.id}
                  movie={movie}
                  setShowModal={setShowModal}
                  setSearch={setSearch}
                  setPage={setPage}
                  onClick={handleClick}
                />
              ))}

            {showSeries &&
              popularSeries.map((serie) => (
                <CardSerie
                  className="border-5"
                  key={serie.id}
                  serie={serie}
                  setShowModal={setShowModal}
                  setSearch={setSearch}
                />
              ))}
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default NavbarJs;
