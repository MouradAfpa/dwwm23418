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
  const [showModal, setShowModal] = useState(false);
  const [page , setPage] = useState(1);


  useEffect(() => {

    if (!search){
    const fetchData = async () => {
      setMovies(await fetchPopularMovies(page));
      setPopularSeries(await fetchSeries(page));
    }  
    fetchData();
  }else{
    const fetchData = async () => {
        setMovies(await searchMovies(search));
        setPopularSeries(await searchSeries(search));
      } 
    fetchData();
      } 
  }, [search,page]);

  console.log(movies);

  const nextPage = () => page(setPage(page+1));
  
  const previousPage = () => {
    if(page>1){
    page(setPage(page-1))
  }
  }
  console.log(page);


  return (
    <BrowserRouter>
      <NavbarJs
        search={search}
        setSearch={setSearch}
        movies = {movies}
        setMovies = {setMovies}
        popularSeries={popularSeries}
        setPopularSeries={setPopularSeries}
        showModal = {showModal}
        setShowModal = {setShowModal}
        page={page}
        nextPage={nextPage}
        setPage = {setPage}
        previousPage={previousPage}
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
