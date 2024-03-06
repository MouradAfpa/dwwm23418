import {  FAVORIE , REMOVE_FAVO} from "./action";

const initial = {
    favo: []
}

const Reducer = (state = initial, action) =>{
    switch(action.type){
        case FAVORIE:
            const isFavo = state.favo.some(item => item.id === action.payload.id);
            if(!isFavo){
            return{
                ...state,
                favo: [...state.favo , action.payload]
            };
        }
        return state;

        case REMOVE_FAVO:
            const removeFav = state.favo.filter(item => item.id !== action.payload);
            return{
                ...state,
                favo: removeFav
            }
            default:
                return state;
    }
}

export default Reducer;