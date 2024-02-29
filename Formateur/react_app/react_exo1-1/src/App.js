import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Product from './Components/Product';

function App() {
  const [product] = useState({name:'Nike Aire Max 270 React', price:'160€', description:`Revenez essentiel avec Nike Air Max 270 React, inspiré de l'art moderne du siècle. Avec des couleurs simples sur des lignes naturellement courbées, l'amortissement doux se concentre sur ce qui est le plus important : une conduite fluide et un confort optimal.`, stock:'10 en stock'});


  return (
  <div>
    <Header/>
    <Product name={product.name} price={product.price} description={product.description} stock={product.stock}/>
  </div>
  );
}

export default App;
