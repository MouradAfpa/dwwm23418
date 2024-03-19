
import React from "react";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Modal} from 'react-bootstrap';
import './PokemonList.css';


const PokemonSearched = ({pokemon}) => { 
    const [popup, setPopup] = useState(false);

    const visibleSearch = (poke) => {
        setPopup(poke);
    }
    const invisibleSearch = () => {
        setPopup(false);
    }

    return (
        <div id="listpoke">
            <div id="conteneurpoke">
                {<Card key={pokemon.id} onClick={() => visibleSearch(pokemon)} id="imagepoke">
                     {<h6>{pokemon.name}</h6>}
                     <img src={`${pokemon.image}`}/>
                </Card> }
            </div>

            <Modal show={popup !== false} onHide={invisibleSearch} id="popuppoke"> 
            {popup && (
                <div id="base">
                    <div id="ligne1">
                        <h2>{popup.name}</h2>
                    </div>
                    <div id="ligne2">
                        <div id="type1">
                            {popup.apiTypes[0].name}
                            <img src={`${popup.apiTypes[0].image}`} alt={popup.image} className="w-25"/>
                        </div>
                        {popup.apiTypes.length === 2 ? <div id="type2">
                            {popup.apiTypes[1].name}
                            <img src={`${popup.apiTypes[1].image}`} alt={popup.image} className="w-25"/>
                        </div> : <></>}
                    </div>
                    <div id="ligne3">
                        <img src={`${popup.image}`} alt={popup.name} className="w-75" />
                    </div>
                    <div id="ligne4">
                        <table>
                            <tr id="tr1">
                                <td>HP</td><td>ATK</td><td>DEF</td><td>ASP</td><td>DSP</td><td>VIT</td>
                            </tr>

                            <tr>
                                <td>{popup.stats.HP}</td><td>{popup.stats.attack}</td><td>{popup.stats.defense}</td><td>{popup.stats.special_attack}</td><td>{popup.stats.special_defense}</td><td>{popup.stats.speed}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            )}              
            </Modal>
        </div>
    )
}

export default PokemonSearched