import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import CardPokemon from "./cardPokemon";
import BoutonPage from "./boutonPage";

function ListePokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [Loading, setLoading] = useState(true);
  const pokemonParPage = 15;
  const indexDernierPokemon = page * pokemonParPage;
  const indexPremierPokemon = indexDernierPokemon - pokemonParPage;
  const pokemonAfficher = Array.isArray(pokemons)
    ? pokemons.slice(indexPremierPokemon, indexDernierPokemon)
    : pokemons;
  const nbrPage = pokemons.length / pokemonParPage;

  const [searchVal, setSearchVal] = useState("");
  const [searchTerm, setSearchTerm] = useState(searchVal);

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchVal(searchTerm);
  };

  useEffect(() => {
    if (!searchVal) {
      const getPokemons = async () => {
        const pokemons = await axios.get(
          `https://pokebuildapi.fr/api/v1/pokemon/generation/1`
        );
        setPokemons(pokemons.data);
        setLoading(false);
      };
      getPokemons();
    } else {
      try {
        const getPokemons = async () => {
          const pokemons = await axios.get(
            `https://pokebuildapi.fr/api/v1/pokemon/${searchVal}`
          );
          setPokemons(pokemons.data);
          setLoading(false);
        };
        getPokemons();
      } catch (error) {
        console.log("error fetching pokemons:", error);
      }
    }
  }, [searchVal]);

  const resetSearch = () => {
    setSearchVal("");
  };

  return (
    <>
      {Loading ? (
        <Container>
          <Row className="text-center">
            <h1>
              Les pokémons arrivent ...
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </h1>
          </Row>
        </Container>
      ) : (
        <Container>
          <Form onSubmit={handleSubmit}>
            <Row className=" d-flex justify-content-center">
              <Col>
                <Form.Control
                  onChange={handleChange}
                  value={searchTerm}
                  type="text"
                  placeholder="Search Pokemon..."
                />
              </Col>
              <Col xs="auto">
                <Button variant="danger" type="submit">
                  Rechercher
                </Button>
              </Col>
            </Row>
          </Form>

          <Row className="justify-content-center">
            {Array.isArray(pokemonAfficher) ? (
              pokemonAfficher.map((pokemon) => (
                <CardPokemon key={pokemon.id} pokemon={pokemon} />
              ))
            ) : (
              <Row className="justify-content-center">
                <CardPokemon
                  pokemon={pokemonAfficher}
                  key={pokemonAfficher.id}
                />
                <Button className="m-3" onClick={resetSearch}>
                  Retour à la liste de Pokemons
                </Button>
              </Row>
            )}
          </Row>
          {!isNaN(nbrPage) ? (
            <BoutonPage page={page} setPage={setPage} nbrPage={nbrPage} />
          ) : null}
        </Container>
      )}
    </>
  );
}
export default ListePokemons;
