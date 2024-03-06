import axios from "axios";

export const FAVORIE = 'FAVORIE';

export const add_Favoris = () =>{
    return async (dispatch, getState) =>{
        const {id} = getState().Reducer;
        try{
        const res = await axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
    
    const {data} = res;
 dispatch({
    type: FAVORIE,
    payload: { 
    id: data.id,
    name: data.name,
    image: data.image
}
});
        } catch(error){
            console.error('erreur de recup', error);
        }
    };
}


