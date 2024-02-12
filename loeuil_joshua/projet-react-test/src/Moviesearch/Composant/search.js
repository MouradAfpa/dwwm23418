import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import CardFilm from "./cardFilm";

function Navbar(){
    return (
        <div class="d-flex justify-content-around">
            <button type="button" class="btn btn-dark">
            <h5>
                Home
            </h5>
            </button>
            <div class="input-groupe d-flex">
                <input type="search" class="form-control rounded" placeholder="Search"/>
                <button type="button" class="btn btn-outline-primary" data-mdb-ripple-init>
                  Search
                </button>
                </div>
                
            </div>

        
    )
}

export default Navbar;