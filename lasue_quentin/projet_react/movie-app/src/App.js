import './App.css';
import AffichageNavbar from './component/navBar';
import React from 'react';
import ListeFilm from './component/ListeFilm';




function App() {


  return (
    <div className="App bg-black">
      <AffichageNavbar/>
      <ListeFilm/>
    </div>
  );
}

export default App;
