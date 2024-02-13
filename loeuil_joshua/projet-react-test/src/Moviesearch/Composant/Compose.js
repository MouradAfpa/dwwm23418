import React from "react";
import Navbar from "./search";
import ListFilm from "./cardFilm";


function ComposerComposent(){
    return (
        <>
        <Navbar/>
        <br/>
        <br/>
        <div className="d-flex justify-content-around">
        <ListFilm/>
        </div>
        </>
    )
}

export default ComposerComposent;