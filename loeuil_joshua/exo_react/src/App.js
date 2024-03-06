import { useState } from 'react'
import './App.css';
import Search from './composant/Search';
import 'bootstrap/dist/css/bootstrap.min.css'

import CheckBox from './composant/CheckBox';
import Produits from './composant/Produit';

function App() {
  const [check, setCheck] = useState(false);

  let handleCheck = (()=>{
      if(check){
          setCheck(false);
      }else{
          setCheck(true)
      }

  })
  console.log(check);
  return (
    <div className='m-3 border w-25'>
      <div className='d-flex flex-column align-items-baseline'>
    <Search/>
    <CheckBox check={check} handleCheck={handleCheck} />
    </div>
    <br/>
    <div>
      <Produits/>
    </div>
    </div>
  )
}

export default App;
