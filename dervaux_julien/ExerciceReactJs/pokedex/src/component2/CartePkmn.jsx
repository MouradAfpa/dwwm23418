import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";



// console.log(pokeFav[0]);

function CartePkmn({ pokemon }) {
    let pokeFav = [];
let storage = localStorage.getItem("favoris");

console.log("ici : " + storage);

if (storage === "") {
    console.log(valueOf(storage));
    pokeFav.map(e=>e.push(JSON.stringify(storage)))
} else {
    pokeFav = []
}

    const handleAddToFavorites = () => {
 
        // console.log("ici pokeFav : " + pokeFav)
        const isPokemonInFavorites = pokeFav.includes(pokemon.id);
        
        if (!isPokemonInFavorites) {
            pokeFav.push(pokemon.id);
            localStorage.setItem("favoris", JSON.stringify(pokeFav));
            // alert("Pokemon ajouté aux favoris !")
        } else {
            console.log("Le Pokémon est déjà dans les favoris.");
        }}

            return (
                <Row className="justify-content-center">
                    <Card key={pokemon.id} className="d-flex border-2 border-black m-2" style={{ width: '18rem' }}>
                        <Card.Img
                            src={pokemon.sprite}
                            alt="c limg"
                        />
                        <Card.Body className="d-flex flex-column text-center">
                            <Card.Title>
                                {pokemon.name}
                            </Card.Title>
                            <Card.Text>
                                {`# ${pokemon.pokedexId}`}
                            </Card.Text>
                            <Link to={`/Detail/${pokemon.id}`}>
                                <Button>Detail</Button>
                            </Link>
                            <Button onClick={handleAddToFavorites}>Favorite</Button>
                        </Card.Body>
                    </Card>
                </Row>
            )
};

export default CartePkmn;
