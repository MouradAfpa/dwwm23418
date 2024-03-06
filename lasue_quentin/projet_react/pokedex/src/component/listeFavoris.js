import { Container, Row, Button, Col } from "react-bootstrap";
import CardPokemon from "./cardPokemon";
import { useState } from "react";
import CardFavoris from "./CardFavoris";

function ListeFavoris(){
    const [favoris, setFavoris] =useState(JSON.parse(localStorage.getItem('favoris')) || []) ;

    return(
    <Container>
        <Row>
    {favoris.length===0 ?
    <h1 className="text-center">Vous n'avez aucun Pokémon en favoris.</h1> 
    :
        favoris.map((pokemon)=>(
            <>
            <Col>
            <CardFavoris key={pokemon.id} pokemon={pokemon} favoris={favoris} setFavoris={setFavoris} />
            </Col>
            
            </>
        ))  
    }
        </Row>
    </Container>
    )
}
export default ListeFavoris;