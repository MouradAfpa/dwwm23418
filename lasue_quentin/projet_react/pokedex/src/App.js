import "./App.css";
import ListePokemons from "./component/listePokemon";
import PageDetails from "./component/pageDetails";
import ListeFavoris from "./component/listeFavoris";
import NavBar from "./component/navBar";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [searchVal, setSearchVal] = useState("");

  return (
    <>
      <BrowserRouter>
        <NavBar searchVal={searchVal} setSearchVal={setSearchVal} />
        <Routes>
          <Route
            index
            path="/"
            element={
              <ListePokemons
                searchVal={searchVal}
                setSearchVal={setSearchVal}
              />
            }
          ></Route>
          <Route path="/details/:id" element={<PageDetails />}></Route>
          <Route path="/favoris" element={<ListeFavoris />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
