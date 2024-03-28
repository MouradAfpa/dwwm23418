import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomeView from './view/HomeView';
import SerieView from './view/SerieView';
import FilmView from "./view/FilmView";
import DetailView from "./view/DetailMovieView";
import NavbarJs from "./components/NavbarJs";
import { fetchPopularMovies, searchMovies, fetchSeries, searchSeries } from "./components/ApiFilm";
import FavoritesView from "./view/FavoritesView";
import DetailSerieView from "./view/DetailMovieView";

function App() {
  // Déclaration des états utilisés dans l'application
  const [movies, setMovies] = useState([]); // État pour stocker les films
  const [search, setSearch] = useState(''); // État pour stocker la recherche de films
  const [popularSeries, setPopularSeries] = useState([]); // État pour stocker les séries populaires
  const [favorite, setFavorite] = useState([]); // État pour stocker les films favoris

  // Utilisation de useEffect pour effectuer une action lors du chargement initial de l'application
  useEffect(() => {
    // Fonction asynchrone pour récupérer les données des films populaires et des séries tendance
    const fetchData = async () => {
      // Récupération des films populaires et mise à jour de l'état correspondant
      const responseData = await fetchPopularMovies();
      setMovies(responseData);
      // Récupération des séries tendance et mise à jour de l'état correspondant
      setPopularSeries(await fetchSeries());
    };

    // Appel de la fonction fetchData
    fetchData();
  }, []);

  // Fonction pour gérer la recherche de films
  const handleSearch = async (title) => {
    if (title === '') {
      // Si le champ de recherche est vide, récupérer les films populaires
      const responseData = await fetchPopularMovies();
      setMovies(responseData);
      // Récupérer les séries tendance
      setPopularSeries(await fetchSeries());
    } else {
      // Sinon, effectuer une recherche de films et de séries avec le titre spécifié
      const moviesResponseData = await searchMovies(title);
      setMovies(moviesResponseData);

      const seriesResponseData = await searchSeries(title);
      setPopularSeries(seriesResponseData);
    }
  };

  // Fonction pour gérer l'ajout ou la suppression d'un film favori
  const handleFavorite = (movie) => {
    const isFavorite = favorite.some(favMovie => favMovie.id === movie.id);
    
    if (isFavorite) {
      // Si le film est déjà dans les favoris, le supprimer de la liste
      const updatedFavorites = favorite.filter(favMovie => favMovie.id !== movie.id);
      setFavorite(updatedFavorites);
    } else {
      // Sinon, ajouter le film à la liste des favoris
      setFavorite([...favorite, movie]);
    }
  };

  // Rendu de l'application avec React Router

  return (
    <BrowserRouter>
      {/* Composant Navbar pour la navigation et la recherche */}
      <NavbarJs
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        popularSeries={popularSeries}
        setPopularSeries={setPopularSeries}
      />
      
      {/* Configuration des routes de l'application */}
      <Routes>
        <Route path="/" element={<HomeView movies={movies} />} />
        <Route path="/serie" element={<SerieView popularSeries={popularSeries} setPopularSeries={setPopularSeries} handleSearch={handleSearch} favorite={favorite} setFavorite ={setFavorite} handleFavorite={handleFavorite}/>} />
        <Route path="/film" element={<FilmView handleSearch={handleSearch} movies={movies} setMovies={setMovies} favorite={favorite} setFavorite ={setFavorite} handleFavorite={handleFavorite} />} />
        <Route path="/favorites/detail/:id" element={<FavoritesView favorite={favorite} handleFavorite={handleFavorite} />} />
        <Route path="/detail/:id" element={<DetailView />} />
        <Route path="/serie/:id" element={<DetailSerieView/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
