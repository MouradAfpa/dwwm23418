import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";


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
            <h1 className="text-light">
                <Link to="/" className="text-light text-decoration-none">Pokedex</Link>
                </h1>
            <div className="mt-2"><h3>
            <Link to="./favoris" className="text-light text-decoration-none">Favoris</Link>
            </h3>
            </div>
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