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

    if (!search){
    const fetchData = async () => {
      setMovies(await fetchPopularMovies());
      setPopularSeries(await fetchSeries());
    }  
    fetchData();
  }else{
    const fetchData = async () => {
        setMovies(await searchMovies(search));
        setPopularSeries(await searchSeries(search));
      } 
    fetchData();
      } 
  }, [search]);

  return (
    <BrowserRouter>
      <NavbarJs
        search={search}
        setSearch={setSearch}
        popularSeries={popularSeries}
        setPopularSeries={setPopularSeries}
      />
      <Routes>
        <Route path="/" element={<HomeView movies={movies} popularSeries={popularSeries} />} />
        <Route path="/serie" element={<SerieView popularSeries={popularSeries} setPopularSeries={setPopularSeries}  />} />
        <Route path="/film" element={<FilmView movies={movies} setMovies={setMovies}  />} />
        <Route path="/film/detail/:id" element={<DetailMovieView />} />
        <Route path="/serie/detail/:id" element={<DetailSerieView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
