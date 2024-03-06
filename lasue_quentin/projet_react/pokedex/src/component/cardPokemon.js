import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardPokemon(props) {

  const typesLength = (props.pokemon.apiTypes.length -1); // type principal est soit à l'index 0 soit 1 donc on prend la longueur -1 (longueur max :2)
  const type = props.pokemon.apiTypes;  //tableau des types, 1 ou 2 en fct des pokemons
  const principalType = type[(typesLength)].name; // type principal a l'index length-1, .name qui a pour value le nom exemple : Plante
  
  const bordurColor = {
    Normal :'#A4ACAF',
    Combat : '#D56723',
    Vol : '#8CCADB',
    Poison:'#B97FC9',
    Sol:'sol',
    Roche:'#A38C21',
    Insecte:'#729F3F',
    Spectre:'#7B62A3',
    Acier:'#9EB7B8',
    Feu:'#FD7D24',
    Eau:'#4592C4',
    Plante:'#9BCC50',
    Électrik:'#EED535',
    Psy:'#F366B9',
    Glace:'#51C4E7',
    Dragon:'dragon',
    Ténébres:'#707070',
    Fée:'#FDB9E9',
  }
  
  return (
    <Card 
    className='m-5 border-3'
    style={{ width: '18rem' , borderColor:bordurColor[principalType]}}
    >
      <Card.Img variant="top" src={props.pokemon.image} />
      <Card.Body>
        
        <Card.Title>
          <h4>{props.pokemon.name}
          <Badge bg="secondary" className='ms-2'>#{props.pokemon.pokedexId}</Badge>
          </h4>
        </Card.Title>
        <Card.Text className='align-item'>
          <Container>
            <Row>
              <Link to={`/details/${props.pokemon.id}`}>
                <Row>
                <Button variant="primary" >View {props.pokemon.name}</Button>
                </Row>
              </Link>
            </Row>
          </Container>
            
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default CardPokemon;