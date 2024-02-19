import { fetchFilmPops, rechercheFilms } from "./actions";

const initialState ={
    recherche: '',
    films: []
};

const Reducer1 =(state = initialState, action) =>{
    switch (action.type){
        case fetchFilmPops:
            return{
                ...state,
                recherche:'',
                films: action.payload
            };
            case rechercheFilms:
                return{
                    ...state,
                    recherche: action.payload.recherche,
                    films: action.payload.films
                };
                default:
                    return state;
    }
};

export default Reducer1