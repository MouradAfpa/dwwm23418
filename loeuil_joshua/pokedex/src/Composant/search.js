import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


function Navi({search ,setSearch, recherche}){

    

    return(
        
        <div className="bg-primary d-flex p-3 justify-content-between">
            <h1 className="">Pokedex</h1>
            <form className="w-25">
            <input type="text" 
             value={search}
            onChange={(event) => setSearch(event.target.value)} 
            placeholder="Recherche de pokemon ..."/>
            
         </form>   
        </div>
        
    )
}export default Navi;