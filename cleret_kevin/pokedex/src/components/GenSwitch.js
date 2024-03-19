import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Modal } from "react-bootstrap";
import "./PokemonList.css";

const GenSwitch = ({ gen, setGen }) => {


  return (
    <div id="changeGen">
      <button onClick={setGen(1)}>Gen 1</button>
      <button onClick={setGen(2)}>Gen 2</button>
      {console.log(gen)}
    </div>
  );
};

export default GenSwitch;
