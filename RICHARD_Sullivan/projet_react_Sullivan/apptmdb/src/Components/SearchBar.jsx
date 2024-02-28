import React, { useState } from 'react';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Information from './Movie';



export default function Cover() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  //
  const handleChange = async (event) => {
    setSearchTerm(event.target.value);
    // event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=31ccb8ec8f9ac01204131802e26b90d4&page&language=fr-FR`
      );
      //
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  //
  return (
    <>
      <Navbar className="bg-body-tertiary justify-content-center">
          <Row>
            <Col xs="auto">
              <Form.Control
                className=" mr-sm-2"
                value={searchTerm}
                onChange={handleChange}
                type="text"
                placeholder="Search" />
              </Col>
          </Row>
      </Navbar>
      
      <div className='d-flex flex-wrap justify-content-center'>
        {movies.map((movie) => (
          <Information key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}