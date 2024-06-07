import { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Carte({
  pokemon,
  pokemons,
  favoris,
  setFavoris,
  removeFavoris,
  click,
  setClick,
}) {
  function coeur() {
    if (click === false) {
      return <FontAwesomeIcon icon={faHeart} />;
    } else {
      return <FontAwesomeIcon icon={faHeart} style={{ color: "#ff0000" }} />;
    }
  }

  const [fenetre, setFenetre] = useState(false);

  function visible() {
    setFenetre(true);
  }
  function invisible() {
    setFenetre(false);
  }

  function addToFavoris(id) {
    if (!favoris.includes(id)) setFavoris(favoris.concat(id));
    setClick(true);
  }

  return (
    <div key={pokemon.id} className="d-flex gap-5">
      <div id="carte_bouton">
        <Card onClick={visible} className="border-2 border-black">
          <img id="imgCard" src={pokemon.image} alt="" />
          <div id="nameCard" key={pokemon.id}>
            {pokemon.name}
          </div>
        </Card>
        <button
          onClick={() => {
            setClick(!click);
            addToFavoris(pokemon.id);
          }}
        >
          Ajouter aux favoris
        </button>
        {coeur()}
        {/* <button id="boutonfav" onClick={() => }>
          
          Ajouter aux favoris
        </button> */}
      </div>

      <Modal show={fenetre} onHide={invisible}>
        <Modal.Body className="rounded-5">
          <div className=" d-flex justify-content-center bg-black text-white rounded-4">
            <h1>{pokemon.name}</h1>
          </div>
          <img className=" w-100" src={pokemon.sprite} alt="" />

          {pokemon.apiTypes.length > 1 ? (
            <div class="nani">
              <div class="deuxElem">
                <div>{pokemon.apiTypes[0].name}</div>
                <div>
                  <img class="sprite" src={pokemon.apiTypes[0].image} alt="" />
                </div>
                <div>{pokemon.apiTypes[1].name}</div>
                <div>
                  <img class="sprite" src={pokemon.apiTypes[1].image} alt="" />
                </div>
              </div>
            </div>
          ) : (
            <div class="nani">
              <div class="Elem">
                <div>{pokemon.apiTypes[0].name}</div>
                <div>
                  <img class="sprite" src={pokemon.apiTypes[0].image} alt="" />
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Carte;
