import React, { useEffect, useState } from "react";
import './App.css';
import axios from 'axios';
import Movie from "./components/Movie";
import Youtube from 'react-youtube';

function App() {
    const MOVIE_API = "https://api.themoviedb.org/3/";
    const SEARCH_API = MOVIE_API + "search/movie";
    const DISCOVER_API = MOVIE_API + "discover/movie";
    const API_KEY = "90f90dfc519fb9de7a8406da9eb2ef87";
    const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";

    const [playing, setPlaying] = useState(false);
    const [trailer, setTrailer] = useState(null);
    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [movie, setMovie] = useState({ title: "Loading Movies" });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sortOption, setSortOption] = useState(""); 
    const [genreOption, setGenreOption] = useState(""); 

    useEffect(() => {
        fetchMovies();
    }, [searchKey, sortOption, genreOption]); 

    const fetchMovies = async () => {
        let apiUrl = searchKey ? SEARCH_API : DISCOVER_API;

        
        const params = {
            api_key: API_KEY,
            query: searchKey,
            sort_by: sortOption, 
            with_genres: genreOption 
        };

        const { data } = await axios.get(apiUrl, { params });

        setMovies(data.results);
        setMovie(data.results[currentIndex]);

        if (data.results.length) {
            await fetchMovie(data.results[currentIndex].id);
        }
    }

    const fetchMovie = async (id) => {
        const { data } = await axios.get(`${MOVIE_API}movie/${id}`, {
            params: {
                api_key: API_KEY,
                append_to_response: "videos"
            }
        });

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(vid => vid.name === "Official Trailer");
            setTrailer(trailer ? trailer : data.videos.results[0]);
        }

        setMovie(data);
    }

    const selectMovie = (movie) => {
        fetchMovie(movie.id);
        setPlaying(false);
        setMovie(movie);
        setTrailer(null); 
        window.scrollTo(0, 0);
    }

    const renderMovies = () => (
        movies.map(movie => (
            <Movie
                selectMovie={selectMovie}
                key={movie.id}
                movie={movie}
            />
        ))
    )

    const handleSearchInputChange = (event) => {
        setSearchKey(event.target.value);
    }

    const handleSortChange = (event) => {
        setSortOption(event.target.value); 
    }

    const handleGenreChange = (event) => {
        setGenreOption(event.target.value); 
    }

    const goToPreviousMovie = () => {
        const newIndex = currentIndex === 0 ? movies.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setMovie(movies[newIndex]);
    }

    const goToNextMovie = () => {
        const newIndex = currentIndex === movies.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setMovie(movies[newIndex]);
    }

    return (
        <div className="App">
            <header className="center-max-size header">
                <span className={"brand"}>MoviFlix</span>
                <form className="form" onSubmit={(event) => { event.preventDefault(); fetchMovies(); }}>
                    <input
                        className="search"
                        type="text"
                        id="search"
                        value={searchKey}
                        onInput={handleSearchInputChange}
                    />
                    <button className="submit-search" type="submit"><i className="fa fa-search"></i></button>
                </form>
                <div className="select-container sort-label">
                    <select onChange={handleSortChange}>
                        <option value="">Trier</option>
                        <option value="popularity.desc">Popularité décroissante</option>
                        <option value="popularity.asc">Popularité croissante</option>
                        <option value="release_date.desc">Date de sortie décroissante</option>
                        <option value="release_date.asc">Date de sortie croissante</option>
                        <option value="vote_average.desc">Note décroissante</option>
                        <option value="vote_average.asc">Note croissante</option>
                    </select>
                </div>
                <div className="select-container">
                    <select onChange={handleGenreChange}>
                        <option value="">Filtrer</option>
                        <option value="28">Action</option>
                        <option value="12">Aventure</option>
                        <option value="16">Animation</option>
                        
                    </select>
                </div>
                 
            </header>
            {movies.length ?
                <main>
                    {movie ?
                        <div className="poster"
                            style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${movie.backdrop_path})` }}>
                             {playing ?
                                <>
                                    <Youtube
                                        videoId={trailer.key}
                                        className={"youtube amru"}
                                        containerClassName={"youtube-container amru"}
                                        opts={{
                                            width: '100%',
                                            height: '100%',
                                            playerVars: {
                                                autoplay: 1,
                                                controls: 0,
                                                cc_load_policy: 0,
                                                fs: 0,
                                                iv_load_policy: 0,
                                                modestbranding: 0,
                                                rel: 0,
                                                showinfo: 0,
                                            },
                                        }}
                                    />
                                    <button onClick={() => setPlaying(false)} className={"button close-video"}>Close
                                    </button>
                                </> :
                                <div className="center-max-size">
                                    <div className="poster-content">
                                        {trailer ?
                                            <>
                                                <div className="navigation-buttons">
                                                    <button onClick={goToPreviousMovie}>Previous</button>
                                                    <button onClick={goToNextMovie}>Next</button>
                                                </div>
                                                <button className={"button play-video"} onClick={() => setPlaying(true)}
                                                    type="button">Play Trailer</button>
                                            </> 
                                            : 'Sorry, no trailer available'} 
                                        <h1>{movie.title}</h1>
                                        <p><strong>Date de sortie:</strong> {movie.release_date}</p>
                                        <p><strong>Synopsis:</strong> {movie.overview}</p> 
                                    </div>
                                </div>
                            }
                        </div>
                        : null}

                    <div className={"center-max-size container"}>
                        {renderMovies()} 
                    </div>
                </main>
                : 'Sorry, no movies found'} 
        </div>
    );
}

export default App;
