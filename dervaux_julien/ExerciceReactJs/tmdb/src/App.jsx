import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomeView from './view/HomeView';
import SerieView from './view/SerieView';
import FilmView from "./view/FilmView";
import DetailView from "./view/DetailView";
import NavbarJs from "./components/NavbarJs";
import { fetchPopularMovies, searchMovies, fetchSeries, searchSeries } from "./components/ApiFilm";
import FavoritesView from "./view/FavoritesView";

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [popularSeries, setPopularSeries] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const responseData = await fetchPopularMovies();
      setMovies(responseData);
      setPopularSeries(await fetchSeries());
    };

    fetchData();
  }, []);

  const handleSearch = async (title) => {
    if (title === '') {
      const responseData = await fetchPopularMovies();
      setMovies(responseData);
      setPopularSeries(await fetchSeries());
    } else {
      const moviesResponseData = await searchMovies(title);
      setMovies(moviesResponseData);

      const seriesResponseData = await searchSeries(title);
      setPopularSeries(seriesResponseData);
    }
  };

  const handleFavorite = (movie) => {
    const isFavorite = favorite.some(favMovie => favMovie.id === movie.id);
    
    if (isFavorite) {
      const updatedFavorites = favorite.filter(favMovie => favMovie.id !== movie.id);
      setFavorite(updatedFavorites);
    } else {
      setFavorite([...favorite, movie]);
    }
  };

  return (
    <BrowserRouter>
      <NavbarJs
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        popularSeries={popularSeries}
        setPopularSeries={setPopularSeries}
      />
      <Routes>
        <Route path="/" element={<HomeView movies={movies} />} />
        <Route path="/serie" element={<SerieView popularSeries={popularSeries} setPopularSeries={setPopularSeries} handleSearch={handleSearch} favorite={favorite} setFavorite ={setFavorite} handleFavorite={handleFavorite}/>} />
        <Route path="/film" element={<FilmView handleSearch={handleSearch} movies={movies} setMovies={setMovies} favorite={favorite} setFavorite ={setFavorite} handleFavorite={handleFavorite} />} />
        <Route path="/favorites" element={<FavoritesView favorite={favorite} handleFavorite={handleFavorite} />} />
        <Route path="/detail/:id" element={<DetailView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
