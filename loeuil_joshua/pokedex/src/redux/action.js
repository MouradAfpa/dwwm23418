import axios from "axios";

export const FAVORIE = 'FAVORIE';
export const REMOVE_FAVO = 'REMOVE_FAVO'

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
    image: data.image,
    sprite: data.sprite,
    slug: data.slug,
    apiTypes: data.apiTypes,
    stats: data.stats,
}
});
        } catch(error){
            console.error('erreur de recup', error);
        }
    };
};

export const remove_Favo = (id) => {
    return{
        type:REMOVE_FAVO,
        payload : id
    };
};


