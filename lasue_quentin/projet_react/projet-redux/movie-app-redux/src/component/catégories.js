import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { useDispatch } from "react-redux";
import { resetPage } from "../actions/getfilm.action";
import { useState } from "react";

function Categories({listeAfficher, setListeAfficher}) {
  const dispatch = useDispatch();
//   const [listeAfficher, setListeAfficher] = useState("trendFilm");
  const trendFilm = () => {
    setListeAfficher("trendFilm");
    dispatch(resetPage());
  };

  const popFilm = () => {
    setListeAfficher("PopFilm");
    dispatch(resetPage());
  };

  const discoveryFilm = () => {
    setListeAfficher("discoveryFilm");
    dispatch(resetPage());
  };
  const trendingSerie=()=>{
    setListeAfficher("trendingSerie");
    dispatch(resetPage())
  }
  const categories = [
    {
      nom: "Trending films",
      onclick: trendFilm,
    },
    {
      nom: "Popular films",
      onclick: popFilm,
    },
    {
      nom: "Discovery films",
      onclick: discoveryFilm,
    },
    {
      nom: "Trending Series",
      onclick: trendingSerie,
    },
  ];

  return (
    <>
      <ButtonToolbar className="justify-content-center m-5">
        <ButtonGroup aria-label="First group" size="lg">
          {categories.map((cat) => (
            <Button variant="outline-info" onClick={cat.onclick}>
              {cat.nom}
            </Button>
          ))}
        </ButtonGroup>
      </ButtonToolbar>
    </>
  );
}

export default Categories;
