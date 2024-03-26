import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HomeView from './view/HomeView';
import SerieView from './view/SerieView';
import FilmView from "./view/FilmView";
import DetailView from "./view/DetailView";
import NavbarJs from "./components/NavbarJs";
import { fetchPopularMovies, searchMovies, fetchSeries, searchSeries } from "./components/ApiFilm";

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [popularSeries, setPopularSeries] = useState([]);

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
        <Route path="/serie" element={<SerieView popularSeries={popularSeries} setPopularSeries={setPopularSeries} handleSearch={handleSearch} />} />
        <Route path="/film" element={<FilmView handleSearch={handleSearch} movies={movies} setMovies={setMovies} />} />
        <Route path="/detail/:id" element={<DetailView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
