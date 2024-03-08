import {
  getFilmDiscovery,
  getFilmPop,
  getFilmTrend,
  rechercheFilm,
  getSerie,
  next_page,
  previous_page,
  reset_page,
  ajout_favoris,
} from "../actions/getfilm.action";

const initialState = {
  films: [],
  recherche: "",
  page: 1,
  nbrPage: 1,
  favoris: [],
};

const FilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case getFilmTrend:
      return {
        ...state,
        films: action.payload.films,
        page: action.payload.page,
        nbrPage: action.payload.nbrPage,
      };
    case getFilmPop:
      return {
        ...state,
        films: action.payload.films,
        page: action.payload.page,
        nbrPage: action.payload.nbrPage,
      };
    case getFilmDiscovery:
      return {
        ...state,
        films: action.payload.films,
        page: action.payload.page,
        nbrPage: action.payload.nbrPage,
      };
    case rechercheFilm:
      return {
        ...state,
        films: action.payload.films,
        recherche: action.payload.recherche,
        page: action.payload.page,
        nbrPage: action.payload.nbrPage,
      };
    case getSerie:
      return {
        ...state,
        films: action.payload.films,
        page: action.payload.page,
        nbrPage: action.payload.nbrPage,
      };
    case next_page:
      return {
        ...state,
        page: state.page < state.nbrPage ? state.page + 1 : state.page,
      };
    case previous_page:
      return {
        ...state,
        page: state.page > 1 ? state.page - 1 : state.page,
      };
    case reset_page:
      return {
        ...state,
        page: 1,
      };
    case ajout_favoris:
      const pokemon = action.payload.favoris;
      const isFavorite = state.favoris.includes(pokemon);
      
      if (isFavorite) {
        return {
          ...state,
          favoris: state.favoris.filter((fav) => fav !== pokemon),
        };
      } else {
        return {
          ...state,
          favoris: [...state.favoris, action.payload.favoris],
        };
      }
    default:
      return state;
  }
};
export default FilmReducer;
