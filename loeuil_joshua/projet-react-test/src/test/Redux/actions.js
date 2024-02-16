const fetchFilmPop = 'fetchFilmPop';
const rechercheFilm = 'rechercheFilm';

const api_key = process.env.REACT_APP_API_KEY;

export const fetchFilmPops = () => {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
      .then(response => response.json())
      .then(data => dispatch({ type: fetchFilmPop, payload: data.results }));
  };
};

export const rechercheFilms = (recherche) => {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${recherche}`)
      .then(response => response.json())
      .then(data => dispatch({ type: rechercheFilm, payload: { recherche, films: data.results } }));
  };
};