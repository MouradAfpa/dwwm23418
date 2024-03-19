import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './App.css';
import Movie from '../components/Movie';
import Pagination from '../components/Pagination';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        if (searchTerm.trim() === "") {
          const response = await axios.get(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}&language=fr-FR`
          );
          setMovies(response.data.results);
        } else {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}&page=${currentPage}&language=fr-FR`
          );
          setMovies(response.data.results);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchTrending();
  }, [currentPage, searchTerm]);

  const searchMovie = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  return (
    <Container className="App">
      <h1>Movie Search App</h1>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={searchMovie}
          />
        </Form.Group>
      </Form>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Row className="movies">
        {movies.map((movie) => (
          <Col sm={6} md={4} lg={3}>
            <Movie key={movie.id} movie={movie} />
          </Col>
        ))}
      </Row>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Container>
  );
}

export default App;