import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPokemonPage from "./component2/DetailPokemonPage";
import Home from "./component2/Home";
import Favorites from "./component2/Favorite";

function App() {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
                <Home/>
            }
          />
          <Route
            path="/detail/:id"
            element={
            <DetailPokemonPage/>
          }
          />
          <Route
            path="/favorite/"
            element={
            <Favorites/>
          }
          />
        </Routes>
      </BrowserRouter> 
    )}

export default App
