import { useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Favori(){


const navigate = useNavigate();
const [favo, setFavo] = useState(JSON.parse(localStorage.getItem("FavFilm")) || []);
const [favser, setFavser] = useState(JSON.parse(localStorage.getItem("FavSerie")) || []);

const removeFavoFilm = (favori) =>{
    const UpdFavo = favo.filter((favor) => favor.id !== favori.id);
    setFavo(UpdFavo);
    localStorage.setItem("FavFilm", JSON.stringify(UpdFavo));
}
const removeFavoSer = (favoriser) =>{
    const UpdFavoSer = favser.filter((favor) => favor.id !== favoriser.id);
    setFavser(UpdFavoSer);
    localStorage.setItem("FavSerie", JSON.stringify(UpdFavoSer));
}


function handleClick(favori){
    navigate(`/${favori.id}`)
   }

function handleClickSer(favoriser){
    navigate(`/Serie/${favoriser.id}`)
   }

    return(
<>
<h3 className="text-center">Film</h3>
<div className="d-flex justify-content-evenly flex-wrap gap-4 pt-lg-5 p-5 m-5 bg-primary-subtle">
      {favo.map((favori) => (
        <Card
          key={favori.id}
          className="bg-dark-subtle border-4 border-black "
          style={{ width: "20rem", height: "39.5rem"}}
        >
          <Card.Img
              variant="bottom"
              src={`https://image.tmdb.org/t/p/w200${favori.image}`}
            />
          <Card.Body className=" text-center d-flex flex-column justify-content-between gap-1">
            <h4>{favori.title}</h4>
            <button onClick={() => handleClick(favori)} className="rounded-5 ps-3 pe-3 bg-white">Voir detail</button>
            <button onClick={() => removeFavoFilm(favori)} className="rounded-5 ps-3 pe-3 bg-white">Suppr Favo</button>
          </Card.Body>
          
         
        </Card>
      ))}
    </div>
    <h3 className="text-center">Series</h3>
    <div  className="d-flex justify-content-evenly flex-wrap gap-4 pt-lg-5 p-5 m-5 bg-primary-subtle">
    {favser.map((favoriser) => (
        <Card
          key={favoriser.id}
          className="bg-dark-subtle border-4 border-black "
          style={{ width: "20rem", height: "39.5rem"}}
        >
          <Card.Img
              variant="bottom"
              src={`https://image.tmdb.org/t/p/w200${favoriser.image}`}
            />
          <Card.Body className=" text-center d-flex flex-column justify-content-between gap-1">
            <h4>{favoriser.title}</h4>
            <button onClick={() => handleClickSer(favoriser)} className="rounded-5 ps-3 pe-3 bg-white">Voir detail</button>
            <button onClick={() => removeFavoSer(favoriser)} className="rounded-5 ps-3 pe-3 bg-white">Suppr Favo</button>
          </Card.Body>
          
         
        </Card>
      ))}
    </div>
</>


    )
}
export default Favori;