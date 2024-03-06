import axios from "axios";
import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  ProgressBar,
} from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function PageDetails() {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const { id } = useParams();
  const [types, setTypes] = useState([]);
  const [stats, setStats] = useState([]);
  const [resistance, setResistance] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const rep = await axios.get(
          `https://pokebuildapi.fr/api/v1/pokemon/${id}`
        );
        setPokemonDetails(rep.data);
        setTypes(rep.data.apiTypes);
        setStats(rep.data.stats);
        setResistance(rep.data.apiResistances);
      } catch (error) {
        console.log("Error fetching pokemon Details", error);
      }
    };
    getDetails();
  }, []);

  //Fonctionnalité Favoris : 
  //état local favoris initialiser avec la valeur du local storage si ça existe sinon tableau vide
    const [favoris, setFavoris] = useState(
      JSON.parse(localStorage.getItem('favoris')) || []
    );
      //Bascule en favoris ou non si il l'est déja
    const ajoutFavoris = (pokemon)=>{
    const updatedFavoris = [...favoris];
    const index = updatedFavoris.findIndex((fav)=>fav.id === pokemon.id);
    if(index===-1){
      updatedFavoris.push(pokemon);
    }else{
      updatedFavoris.splice(index,1);
    }
    setFavoris(updatedFavoris);
    localStorage.setItem('favoris', JSON.stringify(updatedFavoris));
  };
  // verifie si le pokémon est en favoris 
  const isFavoris = (pokemon)=>{
    return favoris.some((fav)=> fav.id === pokemon.id);
  }
  
  
  return (
    <>
      <Link to="/">
        <Button variant="primary" className="m-1">Retour</Button>
      </Link>
      <Container>
        <Row>
          <Col>
            <Card
              className="m-5 border-2 border-dark"
              style={{ width: "15rem" }}
            >
              <Button variant={isFavoris(pokemonDetails)?"warning":"outline-warning"} className="m-1" onClick={()=>ajoutFavoris(pokemonDetails)}>☆</Button>
              <Card.Img src={pokemonDetails.image} />
              <Card.Title className="text-center">
                <h1>{pokemonDetails.name}</h1>
                <Badge bg="secondary" className="ms-2">
                  #{pokemonDetails.pokedexId}
                </Badge>
              </Card.Title>
              <hr></hr>
              <Card.Text className="text-center">
                <h3>Type(s):</h3>
                <Row>
                  {types.map((type) => (
                    <Col>
                      <p className="fw-bold">{type.name}</p>
                      <Image
                        style={{ width: "3rem", marginBottom: "1rem" }}
                        src={type.image}
                      />
                    </Col>
                  ))}
                </Row>
              </Card.Text>
            </Card>
          </Col>


          <Col>
            <Card
              className="m-5 border-2 border-dark"
              style={{ width: "25rem" }}
            >
              <Container>
                <Card.Title className="text-center">
                  <h5>Statistiques :</h5>
                </Card.Title>
                <Row>
                  <Row className="justify-content-center">
                    <Card.Img
                      style={{ width: "8rem" }}
                      src={pokemonDetails.sprite}
                    />
                  </Row>
                  <Row className="text-center fw-bold">
                    <p className="text-info fw-bold"> HP : {stats.HP}</p>
                    <p className="text-danger fw-bold"> Attack :{stats.attack}</p>
                    <p className="text-warning fw-bold"> Defense :{stats.defense}</p>
                    <p className="text-danger fw-bold"> Special Attack :{stats.special_attack}</p>
                    <p className="text-warning fw-bold"> Special Defense :{stats.special_defense}</p>
                    <p className="text-info fw-bold"> Speed :{stats.speed}</p>
                  </Row>

                </Row> 
                <Row>
                  <ProgressBar className="my-3" max="600">
                    <ProgressBar  label="HP"  variant="info" now={stats.HP} key="1"/>
                    <ProgressBar  label="Attack"  variant="danger" now={stats.attack} key="2"/>
                    <ProgressBar  label="Defense"  variant="warning" now={stats.defense} key="3"/>
                    <ProgressBar  label="Spe.Attack"  variant="danger" now={stats.special_attack} key="4"/>
                    <ProgressBar  label="Spe. defense"  variant="warning" now={stats.special_defense} key="5"/>
                    <ProgressBar  label="Speed"  variant="info" now={stats.speed} key="6"/>
                  </ProgressBar>
                </Row>
              </Container>
            </Card>
          </Col>

          <Col>
          <Card className="m-5 border-2 border-dark">
            <Card.Title className="text-center">
              <h5>Resistances / Faiblesses :</h5>
            </Card.Title>
            <Container>
              <Row>
                <Col>
                    {resistance.map((resist)=>{
                      let badgeColor = resist.damage_multiplier
                      if(badgeColor == 1){
                        badgeColor = "secondary"
                      }else if(badgeColor == 2){
                        badgeColor = "danger"
                      }else {
                        badgeColor = "success"
                      }
                      return (
                          <Badge bg={badgeColor} className="m-2 fs-4 ">{resist.name}</Badge>
                    )})
                    }
                </Col>
              </Row>
            </Container>
          </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PageDetails;
