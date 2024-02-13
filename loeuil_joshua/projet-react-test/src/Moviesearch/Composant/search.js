import React from "react";
import "bootstrap/dist/css/bootstrap.css";


function Navbar(){
    return (
        <div className="d-flex justify-content-center bg-dark">
            <div className="input-groupe d-flex">
                <input type="search" className="form-control" placeholder="Search"/>
                <button type="button" className="btn btn-primary" >
                  Search
                </button>
                </div>
                <br/>
                <br/>
            </div>
            

        
    )
}

export default Navbar;