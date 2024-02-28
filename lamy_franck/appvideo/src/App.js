import './App.css';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [titre, setTitre] = useState('');
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const searchPopularFilms = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=fr-US&page=1&api_key=60dcc0ef55fba7ca320096a8a9aa1391');
        const result = response.data.results;
        if (result.length > 0) {
          const filmsData = result.map(film => {
            return {
              titre: film.original_title,
              overview: film.overview,
              poster_path: film.poster_path ? `https://image.tmdb.org/t/p/w200/${film.poster_path}` : 'https://static.vecteezy.com/ti/vecteur-libre/p1/4141669-aucune-photo-ou-image-blanche-icone-chargement-images-ou-image-manquante-marque-image-non-disponible-ou-image-coming-soon-sign-simple-nature-silhouette-in-frame-illustrationle-isolee-vectoriel.jpg'
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

    searchPopularFilms();
  }, []);


  const rechercherFilm = async (event) => {
    try {
      const searchTerm = event.target.value;
      setTitre(searchTerm);
      
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=60dcc0ef55fba7ca320096a8a9aa1391&query=${searchTerm}`);
      const result = response.data.results;
      if (result.length > 0) {
        const filmsData = result.map(film => {
          return {
            titre: film.original_title,
            overview: film.overview,
            poster_path: film.poster_path ? `https://image.tmdb.org/t/p/w200/${film.poster_path}` : 'https://static.vecteezy.com/ti/vecteur-libre/p1/4141669-aucune-photo-ou-image-blanche-icone-chargement-images-ou-image-manquante-marque-image-non-disponible-ou-image-coming-soon-sign-simple-nature-silhouette-in-frame-illustrationle-isolee-vectoriel.jpg'
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
      <Form.Control className='w-25 m-lg-4 ' size="lg" type="text" placeholder="Titre de film" onChange={rechercherFilm} />
      <div className='d-flex justify-content flex-wrap m-2 '>
      {films.map((movie, index)=>(
        <div key={index} className='w-25'>
            <div className='card w-60 m-4'>
              <img className="card-img-top" src={movie.poster_path} alt="Affiche film" />
              <h5 className='card-name m-2 '>{movie.titre}</h5>
            </div>  
        </div>
      ))}

    </div>
    </div>
  );
}

export default App;






// import './App.css';
// import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [films, setFilms] = useState([]);

//   useEffect(() => {
//     const fetchPopularFilms = async () => {
//       try {
//         const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=fr-US&page=1&api_key=60dcc0ef55fba7ca320096a8a9aa1391');
//         const result = response.data.results;
//         if (result.length > 0) {
//           const filmsData = result.map(film => {
//             return {
//               titre: film.original_title,
//               overview: film.overview,
//               poster_path: film.poster_path ? `https://image.tmdb.org/t/p/w200/${film.poster_path}` : 'https://static.vecteezy.com/ti/vecteur-libre/p1/4141669-aucune-photo-ou-image-blanche-icone-chargement-images-ou-image-manquante-marque-image-non-disponible-ou-image-coming-soon-sign-simple-nature-silhouette-in-frame-illustrationle-isolee-vectoriel.jpg'
//             };
//           });
//           setFilms(filmsData);
//         } else {
//           setFilms([]);
//         }
//       } catch (error) {
//         console.error('Erreur lors de la récupération des films populaires:', error);
//       }
//     };

//     fetchPopularFilms();
//   }, []);

//   const rechercherFilm = async (event) => {
//     try {
//       const searchTerm = event.target.value;
      
//       if (searchTerm.trim() === '') {
//         setFilms([]); // Effacer les résultats si la barre de recherche est vide
//         return;
//       }
      
//       const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=60dcc0ef55fba7ca320096a8a9aa1391&query=${searchTerm}`);
//       const result = response.data.results;
//       if (result.length > 0) {
//         const filmsData = result.map(film => {
//           return {
//             titre: film.original_title,
//             overview: film.overview,
//             poster_path: film.poster_path ? `https://image.tmdb.org/t/p/w200/${film.poster_path}` : 'https://static.vecteezy.com/ti/vecteur-libre/p1/4141669-aucune-photo-ou-image-blanche-icone-chargement-images-ou-image-manquante-marque-image-non-disponible-ou-image-coming-soon-sign-simple-nature-silhouette-in-frame-illustrationle-isolee-vectoriel.jpg'
//           };
//         });
//         setFilms(filmsData);
//       } else {
//         setFilms([]);
//       }
//     } catch (error) {
//       console.error('Erreur lors de la recherche de films:', error);
//     }
//   };
  
//   return (
//     <div className='barHaut'>
//       <h1 className='titreBar'>Recherche de film</h1>
//       <Form.Control className='w-25 m-lg-4 ' size="lg" type="text" placeholder="Titre de film" onChange={rechercherFilm} />
//       <div className='d-flex justify-content-flex-start flex-wrap m-2 '>
//         {films.map((movie, index)=>(
//           <div key={index} className='w-25'>
//             <div className='card w-60 m-4'>
//               <img className="card-img-top" src={movie.poster_path} alt="Affiche film" />
//               <h5 className='card-name m-2 '>{movie.titre}</h5>
//             </div>  
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
