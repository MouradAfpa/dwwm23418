import React from "react";
import "bootstrap/dist/css/bootstrap.css";


function Navbar(){
    return (
        <div class="d-flex justify-content-center bg-dark">
            <div class="input-groupe d-flex">
                <input type="search" class="form-control" placeholder="Search"/>
                <button type="button" class="btn btn-primary" >
                  Search
                </button>
                </div>
                
            </div>

        
    )
}

export default Navbar;