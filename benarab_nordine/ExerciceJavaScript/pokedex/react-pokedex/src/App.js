import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Carte from "./Component/Cardpokemon";
import Header from "./Component/Navbar";
import Search from "./Component/SearchBar";
import Url from "./Component/url";

// import Cardpokemon from './Component/Cardpokemon';

function App() {

  const[recherche,setRecherche]=useState("");
  // const [pokemon, setPokemon] = useState([]);

  // const [search,setSearch]= useState("");

  // useEffect(()=>{
  //   if(!search){
  //   axios.get('https://pokebuildapi.fr/api/v1/pokemon/generation/1')
  //   .then(reponse=>setPokemon(reponse.data))  }
  //   else{
  //     axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${search}`)
  //   .then(reponse=>setSearch(reponse.data))
  //   }

  // },[])

  // fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/1")
  //   .then((response) => response.json())
  //   .then((data) => setPokemon(data));

  // const pokemonProps = {
  //   imageUrl:"https://static.printler.com/cache/b/d/e/4/6/9/bde46975a186eb17f441a26b2a0b1cbfb1b0b129.jpg",
  //   name1: "Pikachu",
  //   numero: "25",
  //   details: ""

  // }

  return (
    <>
      <Header />
      <br />
      <Search recherche ={recherche} setRecherche={setRecherche} />
      {/* <div className="d-flex flex-wrap">
        {pokemon.map((poke) => ( */}
      {/* <div>
        <Carte />
      </div> */}
      {/* ))} */}
      <Url recherche ={recherche}/>
    </>
    // <>
    //
    //   <br />
    //   <Search />
    //   <br />
    //   <Cardpokemon />
    // </>
  );
}

export default App;
