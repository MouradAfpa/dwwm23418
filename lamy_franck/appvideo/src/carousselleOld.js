import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Carouselle() {
  //  --------------------------------------------------------------------------------
  // 
  const [titre, setTitre] = useState('');
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const searchPopularFilms = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=fr-US&page=1&api_key=60dcc0ef55fba7ca320096a8a9aa1391');
        const result1 = response.data.results;
        if (result1.length > 0) {
          const filmsData = result1.map(film => {
            return {
              titre: film.original_title,
              overview: film.overview,
              poster_path: film.backdrop_path,
              release_date:film.release_date,
              // poster_path: film.poster_path ? `https://image.tmdb.org/t/p/w200/${film.poster_path}` : 'https://static.vecteezy.com/ti/vecteur-libre/p1/4141669-aucune-photo-ou-image-blanche-icone-chargement-images-ou-image-manquante-marque-image-non-disponible-ou-image-coming-soon-sign-simple-nature-silhouette-in-frame-illustrationle-isolee-vectoriel.jpg'
            };
          });
          setFilms(filmsData);
        } else {
          setFilms([]);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des films populaires:', error);
      }
    };

    ; searchPopularFilms();
  });

  // 
  //  --------------------------------------------------------------------------------




  return (
    <div className='d-flex flex-wrap justify-content-center' style={{ height: '100%' }}>
      <Carousel style={{ width: '100%' }}>
        {films.map((movie) => (
          <Carousel.Item style={{ width: '100%' }}>
            <img src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} className='d-block w-100' alt='...' />
            <Carousel.Caption style={{ textAlign: 'left', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <h1 style={{ fontSize: '70px',fontStyle : 'arial', fontWeight: 'bold', paddingLeft:'20px', paddingRight: '20px'}}>{movie.titre}</h1>
            <h2 style={{fontFamily: 'monospace', fontSize: '30px', fontWeight:'bold',paddingLeft:'20px', paddingRight:'20px'}}>Date de sortie : {movie.release_date}</h2>
            <p style={{ fontSize: '30px',paddingLeft:'20px'  }}>{movie.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))};
      </Carousel>
    </div>
  )
}

