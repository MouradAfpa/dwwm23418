import React from "react";
import Input from "./input";
import Checkbox from "./checkbox";
import Liste from "./produits";

const Carte = () =>{
    return (
        <>
        <div className="card d-flex flex-column align-items-center" style={{width : "300px"}}>
        <Input/>
        <Checkbox/>
        <Liste/>
        </div>
        </>
    )
}

export default Carte;