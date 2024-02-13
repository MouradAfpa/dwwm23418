import './App.css';
import AffichageNavbar from './component/navBar';
import React from 'react';
import ListeFilm from './component/ListeFilm';
import AffichageFilms from './component/AffichageFilm';




function App() {


  return (
    <div className="App bg-black">
      <AffichageFilms/>
      <ListeFilm/>
    </div>
  );
}

export default App;
