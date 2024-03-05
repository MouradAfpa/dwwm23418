
import React, {useEffect, useState } from "react";
import axios from "axios";
import Carte from "./Cardpokemon";


  
function Url ({recherche}){
const [pokemon, setPokemon] = useState([]);
 
  useEffect(()=>{ 

    axios.get('https://pokebuildapi.fr/api/v1/pokemon/generation/1')
    .then(reponse=>{
        setPokemon(reponse.data)
    })   

    if(recherche){

        setPokemon(pokemon.filter(poke => poke.name.toLowerCase().includes(recherche)))
    }
  },[recherche])

return(

<div className="d-flex flex-wrap">
        {pokemon.map((poke) => (
            <>{console.log(poke)}
                <Carte poke={poke} />
            </>
        ))}
      </div>

    )

}

export default Url;