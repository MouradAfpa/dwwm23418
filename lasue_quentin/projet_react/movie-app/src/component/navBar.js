import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React from 'react';


export default function AffichageNavbar() {

    // const [searchVal, setSearchVal] = React.useState('');
    // const [movies, setMovies] = useState([]);

    // const handleInput = (event) => {
    // setSearchVal(event.target.value);
    // event.preventDefault();
    // try{
    //   const movies = axios.get(
    //     `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchVal}`
    //   );

    //   setMovies(movies.data.results);
    // }catch(error){
    //   console.error('Error fetching data: ',error);
    // }
    // };


    // const filteredFilms = props.films.filter((product) => {
    // return films.includes(searchVal);
    // });

  return (
    <Navbar className="bg-dark justify-content-center" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand> <span className="text-warning fw-bold">Search</span> <i className="text-info">Films</i></Navbar.Brand>
            <Form.Control
            onChange={handleInput}
            value={searchVal}
            type="text"
            placeholder="Rechercher un film"
            className=" mr-sm-2"
            />
      </Container>
    </Navbar>
  );
}

