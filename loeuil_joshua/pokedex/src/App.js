import './App.css';
import ListPoke from './Composant/listPoke';
import Navi from './Composant/search';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [poke, setPoke] = useState([]);
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);


  useEffect(()=>{
    
    if(!search){
      axios.get('https://pokebuildapi.fr/api/v1/pokemon/limit/100')
      .then((res)=>{
        setPoke(res.data);
      })
    }else{ 
      axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${search}`)
      .then((res) =>{
        setResult([res.data])
      })
    } 
  }, [search])

   
  return (
    <div>
      <Navi value={search} setSearch={setSearch}/>

      <div className=" d-flex flex-wrap gap-4 justify-content-evenly p-2">
      {(search ? result : poke).map((poke) => (
          <ListPoke poke={poke} key={poke.id} />))}
     </div>
    </div>
  );
}

export default App;
