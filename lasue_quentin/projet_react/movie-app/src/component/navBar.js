import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';

export default function AffichageNavbar(props) {

    const [searchVal, setSearchVal] = React.useState('');

    const handleInput = (e) => {
    setSearchVal(e.target.value);
    }

    // const handleClearBtn = () => {
    // setSearchVal('');
    // } Pour remettre a 0 la recherche
    

    const filteredProducts = props.products.filter((product) => {
    return product.includes(searchVal);
    });

  return (
    <Navbar className="bg-dark justify-content-center p-3" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand> <span class="text-warning fw-bold">Search</span> <i class="text-info">Films</i></Navbar.Brand>
            <Form.Control
            onChange={handleInput}
            value={searchVal}
            type="text"
            placeholder="Rechercher un film"
            className=" mr-sm-2"
            />
      </Container>
    </Navbar>
  );
}

