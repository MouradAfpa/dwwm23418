import React from "react";
import Navbar from "./search";
import CardFilm from "./cardFilm";


function ComposerComposent(){
    return (
        <>
        <Navbar/>
        <br/>
        <br/>
        <div class="d-flex justify-content-around">
        <CardFilm/>
        <CardFilm/>
        <CardFilm/>
        <CardFilm/>
        </div>
        </>
    )
}

export default ComposerComposent;