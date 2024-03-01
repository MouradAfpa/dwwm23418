import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


function CheckBox({check, handleCheck}){
   
   
  

    return(
        <>
        <label className=" ps-2">
       {check? <input type="checkbox" checked onClick={handleCheck}/>: <input type="checkbox" onClick={handleCheck}/>} Only show products in stock
        </label>
        </>
    )
}

export default CheckBox;