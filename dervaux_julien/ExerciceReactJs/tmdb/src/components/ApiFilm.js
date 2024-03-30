
const api_key = import.meta.env.VITE_API_KEY;

// récuperer depuis l'api https://developer.themoviedb.org/reference/intro/getting-started

// Ici je récupère les FILM POPULAIRES

// Fonction pour récupérer les films populaires depuis l'API
export const fetchPopularMovies = async () => {
    // Effectuer une requête GET à l'API pour les films populaires
    let data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=fr-Fr&page=1`);
    // Convertir la réponse en format JSON
    console.log("ici fetchpopularMovies");
    let response = await data.json();
    // Retourner les résultats des films populaires
    return response.results;
};

// Fonction pour rechercher des séries en fonction d'un titre
export const searchSeries = async (title) => {
    // Effectuer une requête GET à l'API pour rechercher des séries avec le titre spécifié
    let data = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${title}&language=fr-Fr&page=1`);
    let response = await data.json();
    console.log("ici SearchSeries");
    return response.results;
};

// Fonction pour rechercher des films en fonction d'un titre
export const searchMovies = async (title) => {
    let data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${title}&language=fr-Fr&page=1`);
    console.log("ici Searchmovie");

    let response = await data.json();
    return response.results;
};

// Fonction pour récupérer les films tendance du jour depuis l'API

export const fetchTrendingMovies = async () => {
    let data = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}&language=fr-Fr&page=1`);
    let response = await data.json();
    console.log("ici TrendingMovies");

    return response.results;
};

// Fonction pour récupérer les détails d'un film en fonction de son ID
export const fetchMovieDetails = async (id) => {
    // Effectuer une requête GET à l'API pour les détails d'un film avec l'ID spécifié
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=fr-Fr`);
    const data = await response.json();
    console.log("ici MoviesDetails");

    return data;
};

export const fetchSerieDetails = async (id) => {
    // Effectuer une requête GET à l'API pour les détails d'une serie avec l'ID spécifié
    const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}&language=fr-Fr`);
    const data = await response.json();
    console.log("ici SeriesDetails");
    return data;
};

// Fonction pour récupérer les séries tendance du jour depuis l'API
export const fetchSeries = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}&language=fr-Fr&page=1`);
    const data = await response.json();
    console.log("ici fetchSeries");

    return data.results;
};

