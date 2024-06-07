import React, { useState } from "react";
import { Nav, Form } from "react-bootstrap";
import "./NavBar.css";

function Navbar({ setSearch}){

const [recherche, setRecherche] = useState('');

const handleChange = (event) => {
    setRecherche(event.target.value)
}

const handleSubmit = (event)=>{
    event.preventDefault();
    setSearch(recherche);
}


  return (
    <Nav class="navbar">
        <Form onSubmit={handleSubmit}>
      <h1 id="Titre_pok"> POKEDEX</h1>
      <div id="mysearch">
        <div class = "navdroit">
          <label htmlFor="" id="lab">
            Recherchez votre pokémon :
          </label>
          <input
            type="text"
            placeholder="Search..."
            id="searchbar"
            onChange={handleChange}
          ></input>
        
        <button id="search">Rechercher</button>
        </div>
      </div>
      </Form>
    </Nav>
  );
};

export default Navbar;
