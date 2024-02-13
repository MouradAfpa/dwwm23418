import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React from 'react';

export default function AffichageNavbar() {

    // const [searchVal, setSearchVal] = React.useState('');

    // const handleInput = (e) => {
    // setSearchVal(e.target.value);
    // }

    // const filteredProducts = props.products.filter((product) => {
    // return product.includes(searchVal);
    // });

  return (
    <Navbar className="bg-dark justify-content-center" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand> <span className="text-warning fw-bold">Search</span> <i className="text-info">Films</i></Navbar.Brand>
            <Form.Control
            // onChange={handleInput}
            // value={searchVal}
            type="text"
            placeholder="Rechercher un film"
            className=" mr-sm-2"
            />
      </Container>
    </Navbar>
  );
}

