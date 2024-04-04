import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import CardMovie from './CardMovie';
import CardSerie from './CardSerie';
import { useState } from 'react';
import '/STYLE/style.css'


const NavbarJs = ({ search, setSearch, movies, popularSeries, showModal, setShowModal, nextPage , previousPage, page, setPage }) => {

  const [showMovies, setShowMovies] = useState(true);
  const [showSeries, setShowSeries] = useState(true);

  const handleClick = () => {
    navigate(`/film/detail/${movie.id}`);
    setShowModal(false); 
    setSearch('');
    setShowMovies(true); 
    setPage(1);
};


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

  // regarder pour time la recherche 


  // const handleInputChange = (event) => {
  //   setTimeout(()=>{setSearch(event.target.value)},100)
  //   ;
  // };

  const navigate = useNavigate();
  const toSerieView = () => { navigate("/serie") }
  const goBack = () => { navigate(-1) }

  return (
    <div>
      <header className='navbar navbar-expand-lg bg-body-tertiary justify-content-center '>
        <Link className='text-dark m-3 pe-3' to={'/'}>Home</Link>
        <Link className='text-dark m-3 pe-3' to={'/film'}>Film</Link>
        <Link className='text-dark m-3 pe-3' to={'/serie'}>Serie</Link>
        <Link className='text-dark m-3 pe-3' to={'/favoris'}>Favorite</Link>
        <a 
        onClick={() => setShowModal(true)} 
        className='text-dark m-3 pe-3 cursor-pointer'
        style={{cursor: "pointer" }}
        >Open Modal</a>
        {/* <Button onClick={toSerieView}>Next</Button>
        <Button onClick={goBack}>Previous</Button> */}
      </header>



        {/* Modal */}
        <Modal
          dialogClassName="modal-dialog-scrollable modal-fullscreen"
          show={showModal}
          onHide={() => 
          {setShowModal(false); 
          setSearch(''); 
          setShowMovies(true); 
          setPage(1)
          navigate("/")
          }}>

          <Modal.Header closeButton className='d-flex justify-content-center' >
            <Col md="auto" className="d-flex justify-content-end  mr-sm-2">
              <Form.Control
                type="text"
                placeholder="Search"
                value={search}
                onChange={handleInputChange}
                // onKeyUp={handleInputChange}
              />
            </Col>
            <Button onClick={handleMovieFilter}>Films</Button>
            <Button onClick={handleSerieFilter}>Séries</Button>
           <Button onClick={nextPage}>Next Page</Button>
           <p>{page}</p>
           <Button onClick={previousPage}>Previous Page</Button>

          </Modal.Header>

          <Modal.Body className='d-flex flex-wrap justify-content-center  '>
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
  );
}

export default NavbarJs;
