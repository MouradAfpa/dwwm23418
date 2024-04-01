import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import CardMovie from './CardMovie';
import '/STYLE/style.css'
import { useEffect } from 'react';
import CardSerie from './CardSerie';

const NavbarJs = ({ search, setSearch, movies, popularSeries, showModal, setShowModal }) => {

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const navigate = useNavigate();
  const toSerieView = () => { navigate("/serie") }
  const goBack = () => { navigate(-1) }

  return (
    <header className='navbar navbar-expand-lg bg-body-tertiary justify-content-center '>
      <Link className='text-dark m-3 pe-3' to={'/'}>Home</Link>
      <Link className='text-dark m-3 pe-3' to={'/serie'}>Serie</Link>
      <Link className='text-dark m-3 pe-3' to={'/film'}>Film</Link>
      <Link className='text-dark m-3 pe-3' to={'/favorites'}>Favorite</Link>
      <a onClick={() => setShowModal(true)} className='text-dark m-3 pe-3 cursor-pointer'>Open Modal</a>
      <Button onClick={toSerieView}>Next</Button>
      <Button onClick={goBack}>Previous</Button>

      {/* Modal */}
      <Modal
        dialogClassName="modal-dialog-scrollable modal-fullscreen"
        className='modalSize'
        show={showModal}
        onHide={() => {
          setShowModal(false);
          setSearch('');
        }
        }
      >
        <Modal.Header closeButton>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={search}
              onChange={handleInputChange}
            />
          </Col>
        </Modal.Header>

        <Modal.Body className='d-flex flex-wrap '>
          {movies.map((movie) => (
            <CardMovie
              key={movie.id}
              movie={movie}
              setShowModal={setShowModal}
              setSearch={setSearch}
            />
          ))
          }
          {popularSeries.map((serie) => (
            <CardSerie
              key={serie.id}
              serie={serie}
              setShowModal={setShowModal}
              setSearch={setSearch}
            />
          ))
          }
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </header>
  );
}

export default NavbarJs;
