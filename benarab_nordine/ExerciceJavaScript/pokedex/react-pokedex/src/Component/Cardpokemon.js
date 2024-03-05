import { Card, Modal } from "react-bootstrap";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';



function Carte({poke}) {

  const [fenetre, setFenetre] = useState(false)

function visible(){
  setFenetre(true);
}
function invisible(){
  setFenetre(false);
}

  return (
    <div>
      <Card onClick={visible}>
        <img src={poke.image} alt="" />
        <h1>{poke.name}</h1>
        <br />
        <p className="numeroID">#{poke.id}</p>
        <br />
        <Button className="bouton" variant="primary">View Details</Button>
      </Card>
      <Modal show={fenetre} onHide={invisible}>
        <img src={poke.image} alt="" />
        <h1>{poke.name}</h1>
        <p className="numeroID">#{poke.id}</p>
      </Modal>
    </div>
  );
}

export default Carte;