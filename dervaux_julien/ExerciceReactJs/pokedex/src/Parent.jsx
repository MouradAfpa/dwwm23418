import { useEffect, useState } from "react";
import PokmnCard from "./components/PkmnCard";
import SearchBar from "./components/SearchBar";
import DetailPokemonPage from "./components/DetailPokemonPage"



function Parent(){

    const [monster, setMonster] = useState([]);
    const [isLoad, setIsLoad] = useState(false)
    const [search, setSearch] = useState('');

    useEffect(() => {

   
        fetch(`https://pokebuildapi.fr/api/v1/pokemon/limit/100`)
          .then((response) => (response.json()))
          .then((data) => {
            setMonster(data)
          })
  
          if (isLoad){
            setIsLoad(true)}
          console.log(monster);
  },[isLoad]
  )
  
  
  
    return (
  
      <div>
        <SearchBar search = {search} setSearch = {setSearch}/>
        <PokmnCard monster = {monster}/>
        <DetailPokemonPage monster = {monster} />
      </div>
  
    
    );
  }

  export default Parent