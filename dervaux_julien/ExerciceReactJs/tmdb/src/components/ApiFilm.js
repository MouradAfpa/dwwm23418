
const api_key = "345e9307869fd128c56f8c98215535ad";

export const fetchPopularMovies = async () => {
    let data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=fr-Fr&page=1`);
    let response = await data.json();
    return response.results;
};

export const searchMovies = async (title) => {
    let data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${title}&language=fr-Fr&page=1`);
    let response = await data.json();
    return response.results;
};

export const fetchTrendingMovies = async () => {
    let data = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}&language=fr-Fr&page=1`);
    let response = await data.json();
    return response.results;
};

export const fetchMovieDetails = async (id) => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=fr-Fr`);
      const data = await response.json();
      return data;
    };

export const fetchSeries = async () => {
const response = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}&language=fr-Fr&page=1`);
const data = await response.json();
return data.results;}

export const searchSeries = async (title) => {
    let data = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${title}&language=fr-Fr&page=1`);
    let response = await data.json();
    return response.results;
};

