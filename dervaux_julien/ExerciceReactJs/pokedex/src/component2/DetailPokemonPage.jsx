import { Card, Row, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { apiName } from "./api";

function DetailPokemonPage() {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState([]);
    const [type, setType] = useState([]);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const pokemonDetails = await apiName(id);
                setPokemon(pokemonDetails);
                setType(pokemonDetails.apiTypes);
            } catch (error) {
                console.error("Error fetching Pokemon details:", error);
            }
        };
        fetchPokemonDetails();
    }, [id]);

    return (
        <>
            <div className="d-flex flex-wrap col-10 col-md-10 col-lg-12 m-1">
                <Row className="justify-content-center">
                    <Card key={pokemon.id} className="d-flex border-2 border-black m-2" style={{ width: '18rem' }}>
                        {console.log('le pokemon vaut : ' + pokemon)}
                        <Card.Img
                            src={pokemon.sprite}
                            alt="Pokemon image"
                        />
                        <Card.Body className="d-flex flex-column text-center">
                            <Card.Title>{pokemon.name}</Card.Title>
                            <Card.Text>{`#${pokemon.pokedexId}`}</Card.Text>
                            <Card.Text>{`${type.map((elem) => elem.name).join(" / ")}`}</Card.Text>

                            <Link to={`/`}>
                                <Button>Retour</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        </>

    );
}
export default DetailPokemonPage;
