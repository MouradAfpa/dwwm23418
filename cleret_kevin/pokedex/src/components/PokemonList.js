
import React from "react";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Modal} from 'react-bootstrap';
import './PokemonList.css';




const PokemonList = ({pokemon, gen, setGen}) => { 
    const [popup, setPopup] = useState(false);

    const visible = (poke) => {
        setPopup(poke);
    }
    const invisible = () => {
        setPopup(false);
    }



    // GESTION FAVORIS -----------------------
    const [favoris, setFavoris] = useState([]);


    const addFavorite = id => {
        if (!favoris.includes(id)) setFavoris(favoris.concat(id));
        console.log(id);
    };
    
    const removeFavorite = id => {
    let index = favoris.indexOf(id);
    console.log(index);
    let temp = [...favoris.slice(0, index), ...favoris.slice(index + 1)];
    setFavoris(temp);
    };

  let findfavorite = pokemon.filter(recipe => favoris.includes(recipe.id));
    // ---------------------------------------
    // GESTION SIDEBAR -----------------------



    // ---------------------------------------



    return (
        <><div>
            <div id="favorite_list">
                <h2 id="titre_favoris">Favoris</h2>

                {findfavorite.map(recipe => {
                return (
                <div key={recipe.id} className="recipe__card">
                    <img src={recipe.sprite} alt="foods" width={75} height={75} />
                    <h2 className="recipe__card__title">{recipe.name}</h2>

                    <button onClick={() => removeFavorite(recipe.id)}>Retirer des favoris</button>
                </div>
                );})}

                    {console.log(favoris)}
            </div>
            
            <button onClick={() => {setGen(1);console.log(gen)}}>Gen 1</button>
            <button onClick={() => {setGen(2);console.log(gen)}}>Gen 2</button>
            
            <div id="listpoke">
                {pokemon.map((pkmn) => (
                    <div id="conteneurpoke">
                        <Card key={pkmn.id} onClick={() => visible(pkmn)} id="imagepoke" className="border border-3 border-dark rounded-5">
                            <h6>{pkmn.name}</h6>
                            <img src={`${pkmn.sprite}`} className=""/>

                        </Card>
                        

                        <button className="w-5" id="boutonfav" onClick={() => addFavorite(pkmn.id)}>♥</button>
                     </div>
                ))}
           

            <Modal show={popup !== false} onHide={invisible} id="popuppoke"> 
            {popup && (
                <div id="base">
                    <div id="ligne1">
                        <h2>{popup.name}</h2>
                    </div>
                    
                    <div id="ligne3">
                        <img src={`${popup.image}`} alt={popup.name} className="w-75" />
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

                    <br></br>
                    
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
        </div>
        </>
    )
}

export default PokemonList