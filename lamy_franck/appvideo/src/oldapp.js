import './App.css';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';
import Figure from 'react-bootstrap/Figure';

function OldApp() {
  const [titre, setTitre] = useState('');
  const [films, setFilms] = useState([]);

  const rechercherFilm = (event) => {
    setTitre(event.target.value);
  };

  const filmSearch = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=60dcc0ef55fba7ca320096a8a9aa1391&query=${titre}`)
      .then(response => {
        const result = response.data.results;
        if (result.length > 0) {
          const filmsData = result.map(film => {
            return {
              titre: film.original_title,
              overview: film.overview,
              poster_path: film.poster_path ? `https://image.tmdb.org/t/p/w200/${film.poster_path}` : null
            };
          });
          setFilms(filmsData);
        } else {
          setFilms([]);
        }
      })
      .catch(error => {
        console.error('Erreur lors de la recherche de films:', error);
      });
  };
  
  return (
    <div className='barHaut' >
      <h1 className='titreBar'>Recherche de film</h1>
      <Form.Control size="lg" type="text" placeholder="Titre de film" onChange={rechercherFilm} />

      <button onClick={filmSearch}>Rechercher</button>

      {films.map((film, index) => (
        <div key={index}>
          <h2>{film.titre}</h2>
          {film.overview && <p>Aperçu : {film.overview}</p>} */}
          {film.poster_path && <img src={film.poster_path} alt={`Affiche ${film.titre}`} />}
          <div className="film-container"> 
        {films.map((film, index) => (
          <div className="film-item" key={index}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={film.poster_path}
              />
            </Figure>
          </div>
        ))}
      </div>
    </div>      ))}
    </div>
  );
}

export default OldApp;


import './App.css';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [titre, setTitre] = useState('');
  const [films, setFilms] = useState([]);

  const rechercherFilm = async (event) => {
    const searchTerm = event.target.value;
    setTitre(searchTerm);
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=60dcc0ef55fba7ca320096a8a9aa1391&query=${searchTerm}`);
      const result = response.data.results;
      if (result.length > 0) {
        const filmsData = result.map(film => {
          return {
            titre: film.original_title,
            overview: film.overview,
            poster_path: film.poster_path ? `https://image.tmdb.org/t/p/w200/${film.poster_path}` : null
          };
        });
        setFilms(filmsData);
      } else {
        setFilms([]);
      }
    } catch (error) {
      console.error('Erreur lors de la recherche de films:', error);
    }
  };
  
  return (
    <div className='barHaut'>
      <h1 className='titreBar'>Recherche de film</h1>
      <Form.Control size="lg" type="text" placeholder="Titre de film" onChange={rechercherFilm} />
      
      {films.map((movie, index)=>(
        <div key={index} className='film-container'>
          <div className='m-5 w-25'>
            <div className='card d-flex w-50'>
              <img className="card-img-top w-100" src={movie.poster_path} alt="Affiche film" />
              <br />
              <h5 className='card-name'>{movie.titre}</h5>
            </div>  
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

