import './App.css';
import ListPoke from './Composant/listPoke';
import Navi from './Composant/search';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import Favories from './Composant/favoris';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getPoke, get } from './Composant/pokeApi';

function App() {

  const [poke, setPoke] = useState([]);
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
 

  async function fetchPoke(search) {
    try {
      let fetchedPokes;
      if (search) {
        fetchedPokes = await get(search);
        setResult(fetchedPokes)
      } else {
        fetchedPokes = await getPoke();
      }
      console.log(fetchedPokes);
      setPoke(fetchedPokes);
 
      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    // const dataPoke = async () =>{
    //   try{
    // if(!search){
    //   const resultLim = await axios.get('https://pokebuildapi.fr/api/v1/pokemon/limit/102');
    //     setPoke(resultLim.data);

      
  fetchPoke();
    // }else{ 
  //      const resSearch = await axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${search}`)
      
  //       setResult([resSearch.data]);
  //   } 
  // } catch(error){
  //   console.error('erreur', error);
  // }
  
  // };
  // dataPoke();
//  }, [search])
    }
  );


   
  return (
    <Router>
    <div>
      <Navi value={search} setSearch={setSearch} recherche={result}/>

      <div className=" d-flex flex-wrap justify-content-around" >
        <Routes>
          <Route path="/"  element={(search ? result : poke).map((poke) => (
          <ListPoke poke={poke} key={poke.id} />))}/>
      

          <Route path="/favoris" element={<Favories/>} />
          </Routes>
     </div>
    </div>
    
    </Router>
  );
}

export default App;
