import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar'
import Produit from './components/produit'




function App() {

const [stock] = useState({

  name : "Nike SB Dunk Low",
  price : "110€",
  overview : "Parfaite pour le skatepark ou au quotidien, c'est ta nouvelle chaussure de skateboard préférée. Cette version premium de la Dunk Low se pare d'un cuir impeccable et d'une semelle extérieure en caoutchouc pour enchaîner les tricks avec style. Enfin, sa languette en textile léger et son amorti Zoom Air sous le pied te donnent des ailes pendant les longues sessions de skate. Et pour couronner le tout, le Swoosh apporte une touche de classe. En un mot : sensationnel.",
  stock : "Plus en Stock !",
  img : "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/db3c59ca-d9b6-4bb9-9aa7-51e911377996/date-de-sortie-de-la-nike-sb-dunk-low-%C2%AB%C2%A0white-and-gum-light-brown%C2%A0%C2%BB-cd2563-101.jpg"
})

  return (
    <div className="App">
     <Navbar/>
     <Produit props = {stock} />
    </div>
  );
}

export default App;
