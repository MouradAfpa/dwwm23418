import {  FAVORIE} from "./action";

const initial = {
    favo: []
}

const Reducer = (state = initial, action) =>{
    switch(action.type){
        case FAVORIE:
            return{
                ...state,
                favo: [...state.favo , action.payload.id, action.payload.name, action.payload.image]
            };
            default:
                return state;
    }
}

export default Reducer;