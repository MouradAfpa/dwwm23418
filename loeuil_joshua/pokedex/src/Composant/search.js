import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


function Navi({setSearch}){

    const [cherche, setCherche] = useState('');

    const handleCherche = ((event) =>{
        setCherche(event.target.value)
    });

    const handleSubmit = ((event) => {
    event.preventDefault();
    setSearch(cherche)

    })



    return(
        
        <div className="bg-primary d-flex p-3 justify-content-between ">
            <h1 className="text-light">Pokedex</h1>
            <form className="w-25 mt-3" onSubmit={handleSubmit}>
            <input type="search" 
            value={cherche}
            onChange={handleCherche}
            className="rounded-start-4"
            placeholder="Recherche de pokemon .."
            />
            <button type="submit" className="bg-danger text-light rounded-end-5">
                Recherche
            </button>
            
         </form>   
        </div>
        
    )
}export default Navi;