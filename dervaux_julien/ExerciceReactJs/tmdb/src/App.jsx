import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomeView from './view/HomeView';
import SerieView from './view/SerieView';
import FilmView from "./view/FilmView";
import NavbarJs from "./components/NavbarJs";
import { fetchPopularMovies, searchMovies, fetchSeries, searchSeries } from "./components/ApiFilm";
import DetailSerieView from "./view/DetailSerieView";
import DetailMovieView from "./view/DetailMovieView";

function App() {
  const [movies, setMovies] = useState([]); 
  const [search, setSearch] = useState(''); 
  const [popularSeries, setPopularSeries] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      setMovies(await fetchPopularMovies());
      setPopularSeries(await fetchSeries());
    };
    fetchData();
  }, []);

  const handleSearch = async (title) => {
    if (title === '') {
      setMovies(await fetchPopularMovies());
      setPopularSeries(await fetchSeries());
    } else {
      setMovies(await searchMovies(title));
      setPopularSeries(await searchSeries(title));
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
        <Route path="/" element={<HomeView movies={movies} popularSeries={popularSeries} />} />
        <Route path="/serie" element={<SerieView popularSeries={popularSeries} setPopularSeries={setPopularSeries} handleSearch={handleSearch} />} />
        <Route path="/film" element={<FilmView handleSearch={handleSearch} movies={movies} setMovies={setMovies}  />} />
        <Route path="/film/detail/:id" element={<DetailMovieView />} />
        <Route path="/serie/detail/:id" element={<DetailSerieView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
